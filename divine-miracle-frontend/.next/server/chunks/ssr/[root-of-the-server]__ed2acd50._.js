module.exports = [
"[project]/Desktop/Astro/divine-miracle-frontend/.next-internal/server/app/admin/appointments/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/api/appointments/route.js
__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/server.js [app-rsc] (ecmascript)");
;
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';
async function GET(request) {
    try {
        const response = await fetch(`${BACKEND_URL}/api/appointments`, {
            headers: {
                'Authorization': request.headers.get('authorization') || ''
            }
        });
        if (!response.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Failed to fetch appointments'
            }, {
                status: response.status
            });
        }
        const appointments = await response.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json(appointments);
    } catch (error) {
        console.error('API route error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function POST(request) {
    try {
        const body = await request.json();
        const response = await fetch(`${BACKEND_URL}/api/appointments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: 'Failed to create appointment'
            }, {
                status: response.status
            });
        }
        const appointment = await response.json();
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json(appointment, {
            status: 201
        });
    } catch (error) {
        console.error('API route error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Internal server error'
        }, {
            status: 500
        });
    }
}
}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ed2acd50._.js.map