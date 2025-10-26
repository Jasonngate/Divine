module.exports = [
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function AdminLogin() {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLogin = async (e)=>{
        e.preventDefault();
        setError("");
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!res.ok) throw new Error("Invalid credentials");
            const data = await res.json();
            localStorage.setItem("token", data.token); // ✅ Save token
            router.push("/admin/appointments"); // redirect to dashboard
        } catch (err) {
            setError("❌ Invalid email or password");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-screen bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleLogin,
            className: "bg-white p-6 rounded shadow w-96",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4 text-center",
                    children: "Admin Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-center mb-2",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js",
                    lineNumber: 38,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    placeholder: "Admin Email",
                    value: email,
                    onChange: (e)=>setEmail(e.target.value),
                    className: "w-full border p-2 mb-3 rounded",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "password",
                    placeholder: "Admin Password",
                    value: password,
                    onChange: (e)=>setPassword(e.target.value),
                    className: "w-full border p-2 mb-3 rounded",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700",
                    children: "Login"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/login/page.js",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Astro_divine-miracle-frontend_src_app_admin_login_page_751e6776.js.map