module.exports = [
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAppointmentsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
function AdminAppointmentsPage() {
    const [appointments, setAppointments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [admin, setAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkAuth();
    }, []);
    const checkAuth = ()=>{
        const token = localStorage.getItem("adminToken");
        const adminData = localStorage.getItem("admin");
        console.log("Token:", token);
        console.log("Admin data:", adminData);
        // ✅ Fixed: Check if adminData exists and is valid JSON
        if (!token || !adminData || adminData === "undefined" || adminData === "null") {
            console.log("No valid auth data, redirecting to login");
            router.push("/admin/login");
            return;
        }
        try {
            // ✅ Fixed: Parse only if valid JSON
            const parsedAdmin = JSON.parse(adminData);
            setAdmin(parsedAdmin);
            fetchAppointments(token);
        } catch (parseError) {
            console.error("Error parsing admin data:", parseError);
            // Clear invalid data and redirect to login
            localStorage.removeItem("adminToken");
            localStorage.removeItem("admin");
            router.push("/admin/login");
        }
    };
    const fetchAppointments = async (token)=>{
        try {
            console.log("Fetching appointments with token:", token);
            const res = await fetch(`${API_BASE_URL}/api/appointments`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (res.status === 401) {
                // Token expired or invalid
                logout();
                return;
            }
            if (!res.ok) {
                throw new Error(`Failed to fetch appointments: ${res.status}`);
            }
            const data = await res.json();
            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
            setError("Failed to load appointments. Please check if the backend is running.");
        } finally{
            setLoading(false);
        }
    };
    const updateStatus = async (id, status)=>{
        const token = localStorage.getItem("adminToken");
        try {
            const res = await fetch(`${API_BASE_URL}/api/appointments/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    status
                })
            });
            if (res.status === 401) {
                logout();
                return;
            }
            if (!res.ok) throw new Error("Failed to update status");
            // Refresh the list
            fetchAppointments(token);
        } catch (error) {
            console.error("Error updating appointment:", error);
            setError("Failed to update appointment status");
        }
    };
    const logout = ()=>{
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");
        router.push("/admin/login");
    };
    // ✅ Clear any existing invalid data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const adminData = localStorage.getItem("admin");
        if (adminData === "undefined" || adminData === "null") {
            localStorage.removeItem("admin");
            localStorage.removeItem("adminToken");
        }
    }, []);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading appointments..."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
            lineNumber: 122,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "bg-white shadow-sm border-b",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-gray-800",
                                        children: "Admin Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: admin ? `Welcome back, ${admin.name}` : 'Welcome back'
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-600",
                                        children: [
                                            "Logged in as: ",
                                            admin.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: logout,
                                        className: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors",
                                        children: "Logout"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6",
                        children: [
                            error,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.reload(),
                                className: "ml-4 text-sm underline",
                                children: "Retry"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-800 mb-6",
                                children: [
                                    "Appointment Requests (",
                                    appointments.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            appointments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center py-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-lg",
                                        children: "No appointments found."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                        lineNumber: 181,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fetchAppointments(localStorage.getItem("adminToken")),
                                        className: "mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
                                        children: "Refresh"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: appointments.map((appt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-gray-800 mb-2",
                                                                children: "Client Information"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Name:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 196,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    appt.fullName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 196,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Email:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 197,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    appt.email
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Phone:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 198,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    appt.phone
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 198,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                        lineNumber: 194,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-gray-800 mb-2",
                                                                children: "Appointment Details"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Service:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 203,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    appt.service
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 203,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Date:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 204,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    appt.date
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 204,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Time:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 205,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    " ",
                                                                    appt.time
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 205,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Status:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 206,
                                                                        columnNumber: 26
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `ml-2 px-3 py-1 rounded-full text-sm font-medium ${appt.status === 'Approved' ? 'bg-green-100 text-green-800' : appt.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`,
                                                                        children: appt.status || 'Pending'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 207,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 206,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-semibold text-gray-800 mb-2",
                                                                children: "Actions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateStatus(appt._id, 'Approved'),
                                                                        className: "px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm",
                                                                        children: "Approve"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 220,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateStatus(appt._id, 'Cancelled'),
                                                                        className: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm",
                                                                        children: "Cancel"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 226,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>updateStatus(appt._id, 'Pending'),
                                                                        className: "px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors text-sm",
                                                                        children: "Pending"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                        lineNumber: 232,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                        lineNumber: 217,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            appt.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 pt-4 border-t border-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-semibold text-gray-800 mb-2",
                                                        children: "Client Message:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                        lineNumber: 244,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 bg-gray-50 p-3 rounded",
                                                        children: appt.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                        lineNumber: 245,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                                lineNumber: 243,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, appt._id, true, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
                lineNumber: 161,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/admin/appointments/page.js",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_Astro_divine-miracle-frontend_src_app_admin_appointments_page_e9e4fa65.js.map