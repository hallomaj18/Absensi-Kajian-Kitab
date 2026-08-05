"use strict";
const { useState, useRef, useEffect, useCallback } = React;
const PALETTE = {
    paper: "#F4EEDF",
    paperDark: "#E9E0C9",
    ink: "#2A2118",
    inkSoft: "#6B5F4E",
    green: "#1F4838",
    greenDark: "#153229",
    red: "#B23A2E",
    gold: "#B98B3E",
    line: "#D8CBB0",
};
const MAX_W = 760;
// ---------- icons (inline SVG, no external dependency) ----------
function Icon({ path, size = 16, strokeWidth = 2, viewBox = "0 0 24 24", children }) {
    return (React.createElement("svg", { width: size, height: size, viewBox: viewBox, fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" }, children || React.createElement("path", { d: path })));
}
const IconCheck = (p) => React.createElement(Icon, Object.assign({}, p, { path: "M20 6 9 17l-5-5" }));
const IconX = (p) => React.createElement(Icon, Object.assign({}, p, { path: "M18 6 6 18M6 6l12 12" }));
const IconPlus = (p) => React.createElement(Icon, Object.assign({}, p, { path: "M12 5v14M5 12h14" }));
const IconTrash2 = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 6h18" }),
    React.createElement("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    React.createElement("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    React.createElement("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    React.createElement("line", { x1: "14", y1: "11", x2: "14", y2: "17" })));
const IconPencil = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" })));
const IconDownload = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    React.createElement("polyline", { points: "7 10 12 15 17 10" }),
    React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" })));
const IconRotateCcw = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 12a9 9 0 1 0 3-6.7L3 8" }),
    React.createElement("polyline", { points: "3 3 3 8 8 8" })));
const IconUsers = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
    React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })));
const IconCamera = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" }),
    React.createElement("circle", { cx: "12", cy: "13", r: "4" })));
const IconHistory = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 3v5h5" }),
    React.createElement("path", { d: "M3.05 13A9 9 0 1 0 6 5.3L3 8" }),
    React.createElement("polyline", { points: "12 7 12 12 16 14" })));
const IconCircleDot = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" })));
// ---------- storage helpers (localStorage, fully offline) ----------
const STORE_PREFIX = "absensi-kitab:";
async function safeGet(key) {
    try {
        const raw = localStorage.getItem(STORE_PREFIX + key);
        return raw ? JSON.parse(raw) : null;
    }
    catch (_a) {
        return null;
    }
}
async function safeSet(key, value) {
    try {
        localStorage.setItem(STORE_PREFIX + key, JSON.stringify(value));
        return true;
    }
    catch (_a) {
        return false;
    }
}
async function safeDelete(key) {
    try {
        localStorage.removeItem(STORE_PREFIX + key);
    }
    catch (_a) { }
}
// ---------- red-blob detection ----------
function detectRedBlobs(data, width, height) {
    const visited = new Uint8Array(width * height);
    const isRed = (idx) => {
        const r = data[idx * 4], g = data[idx * 4 + 1], b = data[idx * 4 + 2];
        return r > 110 && r - g > 35 && r - b > 35;
    };
    const blobs = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            if (visited[idx])
                continue;
            visited[idx] = 1;
            if (!isRed(idx))
                continue;
            const stack = [[x, y]];
            let minX = x, maxX = x, minY = y, maxY = y, count = 0;
            while (stack.length) {
                const [cx, cy] = stack.pop();
                count++;
                if (cx < minX)
                    minX = cx;
                if (cx > maxX)
                    maxX = cx;
                if (cy < minY)
                    minY = cy;
                if (cy > maxY)
                    maxY = cy;
                const neighbors = [[cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]];
                for (const [nx, ny] of neighbors) {
                    if (nx < 0 || ny < 0 || nx >= width || ny >= height)
                        continue;
                    const nidx = ny * width + nx;
                    if (visited[nidx])
                        continue;
                    visited[nidx] = 1;
                    if (isRed(nidx))
                        stack.push([nx, ny]);
                }
            }
            const bw = maxX - minX, bh = maxY - minY;
            if (count > 12 && bw < width * 0.25 && bh < height * 0.12) {
                blobs.push({ x: (minX + maxX) / 2, y: (minY + maxY) / 2, count });
            }
        }
    }
    return blobs;
}
function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
}
// ================= Class Manager =================
function ClassManager({ classes, setClasses }) {
    const [editing, setEditing] = useState(null);
    const [name, setName] = useState("");
    const [namesText, setNamesText] = useState("");
    const startNew = () => { setEditing("new"); setName(""); setNamesText(""); };
    const startEdit = (c) => { setEditing(c.id); setName(c.name); setNamesText(c.students.join("\n")); };
    const cancel = () => setEditing(null);
    const save = async () => {
        const students = namesText.split("\n").map((s) => s.trim()).filter(Boolean);
        if (!name.trim() || students.length === 0)
            return;
        let next;
        if (editing === "new") {
            next = [...classes, { id: `k_${Date.now()}`, name: name.trim(), students }];
        }
        else {
            next = classes.map((c) => (c.id === editing ? Object.assign(Object.assign({}, c), { name: name.trim(), students }) : c));
        }
        setClasses(next);
        await safeSet("classes", next);
        setEditing(null);
    };
    const remove = async (id) => {
        const next = classes.filter((c) => c.id !== id);
        setClasses(next);
        await safeSet("classes", next);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex items-center justify-between mb-4" },
            React.createElement("h2", { className: "text-lg font-semibold", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Daftar Kelas"),
            editing === null && (React.createElement("button", { onClick: startNew, className: "flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium", style: { background: PALETTE.green, color: PALETTE.paper } },
                React.createElement(IconPlus, { size: 16 }),
                " Tambah Kelas"))),
        editing !== null && (React.createElement("div", { className: "mb-5 p-4 rounded-lg", style: { background: "#fff", border: `1px solid ${PALETTE.line}` } },
            React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Nama Kelas"),
            React.createElement("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Kelas XII IPS B1", className: "w-full mb-3 px-3 py-2 rounded border text-sm outline-none", style: { borderColor: PALETTE.line } }),
            React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Daftar Nama Santri (satu nama per baris, sesuai urutan No. di absensi)"),
            React.createElement("textarea", { value: namesText, onChange: (e) => setNamesText(e.target.value), rows: 8, placeholder: "Abyan Muhamad Toha\nAhmad Luqmanul Hakim\nAhmad Sayyaf Hibatullah\n...", className: "w-full px-3 py-2 rounded border text-sm outline-none font-mono", style: { borderColor: PALETTE.line } }),
            React.createElement("div", { className: "flex gap-2 mt-3" },
                React.createElement("button", { onClick: save, className: "px-3 py-2 rounded text-sm font-medium", style: { background: PALETTE.green, color: PALETTE.paper } }, "Simpan"),
                React.createElement("button", { onClick: cancel, className: "px-3 py-2 rounded text-sm font-medium border", style: { borderColor: PALETTE.line, color: PALETTE.inkSoft } }, "Batal")))),
        classes.length === 0 && editing === null && (React.createElement("div", { className: "text-sm text-center py-10 rounded-lg", style: { color: PALETTE.inkSoft, background: "#fff", border: `1px dashed ${PALETTE.line}` } }, "Belum ada kelas. Tambahkan kelas dan daftar nama santri terlebih dahulu.")),
        React.createElement("div", { className: "grid gap-2" }, classes.map((c) => (React.createElement("div", { key: c.id, className: "flex items-center justify-between px-4 py-3 rounded-lg", style: { background: "#fff", border: `1px solid ${PALETTE.line}` } },
            React.createElement("div", null,
                React.createElement("div", { className: "font-medium text-sm", style: { color: PALETTE.ink } }, c.name),
                React.createElement("div", { className: "text-xs", style: { color: PALETTE.inkSoft } },
                    c.students.length,
                    " santri")),
            React.createElement("div", { className: "flex gap-1" },
                React.createElement("button", { onClick: () => startEdit(c), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.green } },
                    React.createElement(IconPencil, { size: 16 })),
                React.createElement("button", { onClick: () => remove(c.id), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.red } },
                    React.createElement(IconTrash2, { size: 16 })))))))));
}
// ================= Rekap Flow =================
function RekapFlow({ classes, onSaved }) {
    var _a;
    const [classId, setClassId] = useState(((_a = classes[0]) === null || _a === void 0 ? void 0 : _a.id) || "");
    const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [canvasSize, setCanvasSize] = useState(null);
    const [calibStep, setCalibStep] = useState(0);
    const [yFirst, setYFirst] = useState(null);
    const [yLast, setYLast] = useState(null);
    const [rows, setRows] = useState([]);
    const [detected, setDetected] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [saveMsg, setSaveMsg] = useState("");
    const rawCanvasRef = useRef(null);
    const viewCanvasRef = useRef(null);
    const imgRef = useRef(null);
    const fileInputRef = useRef(null);
    const selectedClass = classes.find((c) => c.id === classId) || null;
    const N = selectedClass ? selectedClass.students.length : 0;
    useEffect(() => {
        if (selectedClass)
            setRows(selectedClass.students.map((name, i) => ({ no: i + 1, name, status: false })));
    }, [classId]);
    const resetPhoto = () => {
        setCanvasSize(null);
        setCalibStep(0);
        setYFirst(null);
        setYLast(null);
        setDetected(false);
        setSaveMsg("");
        if (selectedClass)
            setRows(selectedClass.students.map((name, i) => ({ no: i + 1, name, status: false })));
        imgRef.current = null;
    };
    const handleFile = (file) => {
        if (!file)
            return;
        resetPhoto();
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const scale = Math.min(1, MAX_W / img.width);
                const w = Math.round(img.width * scale);
                const h = Math.round(img.height * scale);
                imgRef.current = img;
                setCanvasSize({ w, h });
                setCalibStep(1);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    useEffect(() => {
        if (!canvasSize || !imgRef.current)
            return;
        const raw = rawCanvasRef.current;
        raw.width = canvasSize.w;
        raw.height = canvasSize.h;
        raw.getContext("2d").drawImage(imgRef.current, 0, 0, canvasSize.w, canvasSize.h);
    }, [canvasSize]);
    const runDetection = useCallback(() => {
        if (!rawCanvasRef.current || yFirst == null || yLast == null || N === 0)
            return;
        setProcessing(true);
        setTimeout(() => {
            const ctx = rawCanvasRef.current.getContext("2d");
            const { width, height } = rawCanvasRef.current;
            const imageData = ctx.getImageData(0, 0, width, height);
            const blobs = detectRedBlobs(imageData.data, width, height);
            const rowHeight = (yLast - yFirst) / Math.max(1, N - 1);
            const hadir = new Set();
            blobs.forEach((b) => {
                const rowNum = clamp(Math.round((b.y - yFirst) / rowHeight) + 1, 1, N);
                hadir.add(rowNum);
            });
            setRows((prev) => prev.map((r) => (Object.assign(Object.assign({}, r), { status: hadir.has(r.no) }))));
            setDetected(true);
            setProcessing(false);
        }, 30);
    }, [yFirst, yLast, N]);
    useEffect(() => { if (calibStep === 3 && !detected)
        runDetection(); }, [calibStep, detected, runDetection]);
    useEffect(() => {
        const canvas = viewCanvasRef.current;
        if (!canvas || !canvasSize || !imgRef.current)
            return;
        canvas.width = canvasSize.w;
        canvas.height = canvasSize.h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(imgRef.current, 0, 0, canvasSize.w, canvasSize.h);
        const drawGuide = (y, label) => {
            ctx.strokeStyle = PALETTE.green;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 4]);
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvasSize.w, y);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = PALETTE.green;
            ctx.font = "bold 12px sans-serif";
            ctx.fillText(label, 6, y - 4);
        };
        if (yFirst != null)
            drawGuide(yFirst, "No. 1");
        if (yLast != null)
            drawGuide(yLast, `No. ${N}`);
        if (calibStep === 3 && yFirst != null && yLast != null && N > 0) {
            const rowHeight = (yLast - yFirst) / Math.max(1, N - 1);
            rows.forEach((r, i) => {
                if (!r.status)
                    return;
                const y = yFirst + i * rowHeight;
                ctx.beginPath();
                ctx.arc(34, y, 13, 0, Math.PI * 2);
                ctx.strokeStyle = PALETTE.red;
                ctx.lineWidth = 3;
                ctx.stroke();
            });
        }
    }, [canvasSize, yFirst, yLast, rows, calibStep, N]);
    const handleCanvasClick = (e) => {
        const canvas = viewCanvasRef.current;
        if (!canvas)
            return;
        const rect = canvas.getBoundingClientRect();
        const scaleY = canvas.height / rect.height;
        const y = (e.clientY - rect.top) * scaleY;
        if (calibStep === 1) {
            setYFirst(y);
            setCalibStep(2);
        }
        else if (calibStep === 2) {
            setYLast(y);
            setCalibStep(3);
        }
        else if (calibStep === 3 && yFirst != null && yLast != null && N > 0) {
            const rowHeight = (yLast - yFirst) / Math.max(1, N - 1);
            const rowNum = clamp(Math.round((y - yFirst) / rowHeight) + 1, 1, N);
            setRows((prev) => prev.map((r) => (r.no === rowNum ? Object.assign(Object.assign({}, r), { status: !r.status }) : r)));
        }
    };
    const toggleRow = (no) => setRows((prev) => prev.map((r) => (r.no === no ? Object.assign(Object.assign({}, r), { status: !r.status }) : r)));
    const hadirCount = rows.filter((r) => r.status).length;
    const exportExcel = async () => {
        if (!selectedClass)
            return;
        const wsData = [
            [`Rekap Absensi Kajian Kitab — ${selectedClass.name}`],
            [`Tanggal: ${date}`],
            [],
            ["No", "Nama", "Status"],
            ...rows.map((r) => [r.no, r.name, r.status ? "Hadir" : "Tidak Hadir"]),
            [],
            ["Total Hadir", hadirCount, `dari ${rows.length}`],
        ];
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        ws["!cols"] = [{ wch: 6 }, { wch: 32 }, { wch: 14 }];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Rekap");
        const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const blob = new Blob([out], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Absensi_${selectedClass.name.replace(/\s+/g, "_")}_${date}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        const id = `r_${Date.now()}`;
        const record = { id, classId: selectedClass.id, className: selectedClass.name, date, rows, savedAt: Date.now() };
        const ok1 = await safeSet(`recap:${id}`, record);
        const idx = (await safeGet("history-index")) || [];
        const nextIdx = [{ id, className: selectedClass.name, date, hadir: hadirCount, total: rows.length, savedAt: record.savedAt }, ...idx];
        const ok2 = await safeSet("history-index", nextIdx);
        setSaveMsg(ok1 && ok2 ? "Tersimpan ke riwayat & file Excel diunduh." : "Excel diunduh (gagal menyimpan riwayat).");
        onSaved && onSaved();
    };
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-lg font-semibold mb-4", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Rekap dari Foto"),
        classes.length === 0 ? (React.createElement("div", { className: "text-sm text-center py-10 rounded-lg", style: { color: PALETTE.inkSoft, background: "#fff", border: `1px dashed ${PALETTE.line}` } }, "Tambahkan kelas terlebih dahulu di tab \"Kelola Kelas\".")) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-4" },
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Kelas"),
                    React.createElement("select", { value: classId, onChange: (e) => setClassId(e.target.value), className: "w-full px-3 py-2 rounded border text-sm outline-none bg-white", style: { borderColor: PALETTE.line } }, classes.map((c) => React.createElement("option", { key: c.id, value: c.id },
                        c.name,
                        " (",
                        c.students.length,
                        " santri)")))),
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Tanggal"),
                    React.createElement("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "w-full px-3 py-2 rounded border text-sm outline-none bg-white", style: { borderColor: PALETTE.line } }))),
            React.createElement("div", { className: "mb-4" },
                React.createElement("input", { ref: fileInputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => { var _a; return handleFile((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]); } }),
                React.createElement("button", { onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, className: "flex items-center gap-2 px-3 py-2 rounded text-sm font-medium", style: { background: PALETTE.gold, color: "#fff" } },
                    React.createElement(IconCamera, { size: 16 }),
                    " ",
                    canvasSize ? "Ganti Foto" : "Upload Foto Absensi")),
            canvasSize && (React.createElement("div", { className: "mb-2 text-xs px-3 py-2 rounded", style: { background: PALETTE.paperDark, color: PALETTE.inkSoft } },
                calibStep === 1 && "Langkah 1/2: klik pada baris nomor 1 (garis akan muncul di titik yang diklik).",
                calibStep === 2 && `Langkah 2/2: klik pada baris nomor terakhir (No. ${N}).`,
                calibStep === 3 && "Kalibrasi selesai. Lingkaran merah menandai santri yang terdeteksi hadir — klik pada foto atau centang di tabel untuk koreksi.")),
            canvasSize && (React.createElement("div", { className: "mb-4 rounded-lg overflow-hidden border", style: { borderColor: PALETTE.line } },
                React.createElement("canvas", { ref: viewCanvasRef, onClick: handleCanvasClick, style: { width: "100%", display: "block", cursor: "crosshair" } }))),
            React.createElement("canvas", { ref: rawCanvasRef, style: { display: "none" } }),
            processing && React.createElement("div", { className: "text-sm mb-3", style: { color: PALETTE.inkSoft } }, "Mendeteksi tanda merah\u2026"),
            calibStep === 3 && (React.createElement("div", { className: "flex items-center gap-2 mb-3" },
                React.createElement("button", { onClick: () => { setCalibStep(1); setYFirst(null); setYLast(null); setDetected(false); }, className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border", style: { borderColor: PALETTE.line, color: PALETTE.inkSoft } },
                    React.createElement(IconRotateCcw, { size: 14 }),
                    " Ulangi Kalibrasi"),
                React.createElement("span", { className: "text-xs", style: { color: PALETTE.inkSoft } },
                    "Terdeteksi hadir: ",
                    React.createElement("b", { style: { color: PALETTE.green } }, hadirCount),
                    " / ",
                    rows.length))),
            rows.length > 0 && (React.createElement("div", { className: "mb-4 rounded-lg overflow-hidden", style: { border: `1px solid ${PALETTE.line}` } },
                React.createElement("div", { className: "grid grid-cols-[40px_1fr_90px] text-xs font-semibold px-3 py-2", style: { background: PALETTE.green, color: PALETTE.paper } },
                    React.createElement("div", null, "No"),
                    React.createElement("div", null, "Nama"),
                    React.createElement("div", null, "Status")),
                React.createElement("div", { style: { maxHeight: 340, overflowY: "auto" } }, rows.map((r) => (React.createElement("div", { key: r.no, className: "grid grid-cols-[40px_1fr_90px] items-center px-3 py-1.5 text-sm", style: { borderTop: `1px solid ${PALETTE.line}`, background: r.status ? "#FBF3EC" : "#fff" } },
                    React.createElement("div", { style: { color: PALETTE.inkSoft } }, r.no),
                    React.createElement("div", { style: { color: PALETTE.ink } }, r.name),
                    React.createElement("button", { onClick: () => toggleRow(r.no), className: "flex items-center gap-1 justify-self-start px-2 py-1 rounded text-xs font-medium", style: { background: r.status ? PALETTE.red : PALETTE.paperDark, color: r.status ? "#fff" : PALETTE.inkSoft } },
                        r.status ? React.createElement(IconCheck, { size: 12 }) : React.createElement(IconX, { size: 12 }),
                        r.status ? "Hadir" : "Tidak"))))))),
            rows.length > 0 && calibStep === 3 && (React.createElement("button", { onClick: exportExcel, className: "flex items-center gap-2 px-4 py-2.5 rounded text-sm font-semibold", style: { background: PALETTE.green, color: PALETTE.paper } },
                React.createElement(IconDownload, { size: 16 }),
                " Simpan & Unduh Excel")),
            saveMsg && React.createElement("div", { className: "mt-2 text-xs", style: { color: PALETTE.green } }, saveMsg)))));
}
// ================= History =================
function HistoryTab({ history, refresh }) {
    const redownload = async (item) => {
        const record = await safeGet(`recap:${item.id}`);
        if (!record)
            return;
        const wsData = [
            [`Rekap Absensi Kajian Kitab — ${record.className}`],
            [`Tanggal: ${record.date}`],
            [],
            ["No", "Nama", "Status"],
            ...record.rows.map((r) => [r.no, r.name, r.status ? "Hadir" : "Tidak Hadir"]),
        ];
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Rekap");
        const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const blob = new Blob([out], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Absensi_${record.className.replace(/\s+/g, "_")}_${record.date}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const remove = async (item) => {
        await safeDelete(`recap:${item.id}`);
        const idx = (await safeGet("history-index")) || [];
        await safeSet("history-index", idx.filter((h) => h.id !== item.id));
        refresh();
    };
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-lg font-semibold mb-4", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Riwayat Rekap"),
        history.length === 0 ? (React.createElement("div", { className: "text-sm text-center py-10 rounded-lg", style: { color: PALETTE.inkSoft, background: "#fff", border: `1px dashed ${PALETTE.line}` } }, "Belum ada rekap tersimpan.")) : (React.createElement("div", { className: "grid gap-2" }, history.map((h) => (React.createElement("div", { key: h.id, className: "flex items-center justify-between px-4 py-3 rounded-lg", style: { background: "#fff", border: `1px solid ${PALETTE.line}` } },
            React.createElement("div", null,
                React.createElement("div", { className: "font-medium text-sm", style: { color: PALETTE.ink } }, h.className),
                React.createElement("div", { className: "text-xs", style: { color: PALETTE.inkSoft } },
                    h.date,
                    " \u00B7 Hadir ",
                    h.hadir,
                    "/",
                    h.total)),
            React.createElement("div", { className: "flex gap-1" },
                React.createElement("button", { onClick: () => redownload(h), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.green } },
                    React.createElement(IconDownload, { size: 16 })),
                React.createElement("button", { onClick: () => remove(h), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.red } },
                    React.createElement(IconTrash2, { size: 16 }))))))))));
}
// ================= App =================
function AbsensiApp() {
    const [tab, setTab] = useState("rekap");
    const [classes, setClasses] = useState([]);
    const [history, setHistory] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const loadAll = async () => {
        const c = await safeGet("classes");
        const h = await safeGet("history-index");
        setClasses(c || []);
        setHistory(h || []);
        setLoaded(true);
    };
    useEffect(() => { loadAll(); }, []);
    const tabs = [
        { id: "rekap", label: "Rekap Absensi", icon: IconCamera },
        { id: "kelas", label: "Kelola Kelas", icon: IconUsers },
        { id: "riwayat", label: "Riwayat", icon: IconHistory },
    ];
    return (React.createElement("div", { className: "absensi-app", style: { background: PALETTE.paper, minHeight: "100vh", fontFamily: "var(--font-body)" } },
        React.createElement("div", { className: "max-w-2xl mx-auto px-4 py-6" },
            React.createElement("div", { className: "mb-5 pb-4", style: { borderBottom: `2px solid ${PALETTE.green}` } },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement(IconCircleDot, { size: 22, style: { color: PALETTE.red } }),
                    React.createElement("h1", { className: "text-xl font-bold", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Rekap Absensi Kajian Kitab")),
                React.createElement("p", { className: "text-xs mt-1", style: { color: PALETTE.inkSoft } }, "Unggah foto absensi, sistem mendeteksi tanda lingkaran merah secara otomatis. (Versi offline \u2014 data tersimpan di HP ini saja)")),
            React.createElement("div", { className: "flex gap-1 mb-5 p-1 rounded-lg", style: { background: PALETTE.paperDark } }, tabs.map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (React.createElement("button", { key: t.id, onClick: () => setTab(t.id), className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-medium transition", style: active ? { background: PALETTE.green, color: PALETTE.paper } : { color: PALETTE.inkSoft } },
                    React.createElement(Icon, { size: 14 }),
                    " ",
                    t.label));
            })),
            !loaded ? (React.createElement("div", { className: "text-sm text-center py-10", style: { color: PALETTE.inkSoft } }, "Memuat data\u2026")) : (React.createElement(React.Fragment, null,
                tab === "rekap" && React.createElement(RekapFlow, { classes: classes, onSaved: loadAll }),
                tab === "kelas" && React.createElement(ClassManager, { classes: classes, setClasses: setClasses }),
                tab === "riwayat" && React.createElement(HistoryTab, { history: history, refresh: loadAll }))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(AbsensiApp, null));
