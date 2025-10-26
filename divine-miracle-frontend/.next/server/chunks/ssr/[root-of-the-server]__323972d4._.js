module.exports = [
"[project]/Desktop/Astro/divine-miracle-frontend/.next-internal/server/app/appointment/page/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Desktop/Astro/divine-miracle-frontend/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { jsxDEV: _jsxDEV } = __turbopack_context__.r("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    date: "",
    time: "",
    message: ""
});
const handleChange = (e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    });
};
const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Form submitted:", form);
// TODO: send data to API or email
};
return /*#__PURE__*/ _jsxDEV("div", {
    className: "min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center p-6",
    children: /*#__PURE__*/ _jsxDEV("div", {
        className: "bg-white shadow-xl rounded-2xl w-full max-w-5xl grid md:grid-cols-2",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "p-10 flex flex-col justify-center text-white bg-gradient-to-b from-purple-600 to-pink-600 rounded-l-2xl",
                children: [
                    /*#__PURE__*/ _jsxDEV("h1", {
                        className: "text-3xl font-bold mb-4",
                        children: "Book an Appointment Now"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "mb-6",
                        children: "Let's Chat And Know More About You"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "mt-auto font-semibold",
                        children: "Contact Us Now!!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "p-10",
                children: [
                    /*#__PURE__*/ _jsxDEV("h2", {
                        className: "text-2xl font-bold mb-6",
                        children: "Appointment"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                    /*#__PURE__*/ _jsxDEV("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ _jsxDEV("input", {
                                type: "text",
                                name: "name",
                                placeholder: "Name *",
                                value: form.name,
                                onChange: handleChange,
                                className: "input input-bordered w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("input", {
                                type: "email",
                                name: "email",
                                placeholder: "Email *",
                                value: form.email,
                                onChange: handleChange,
                                className: "input input-bordered w-full",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("input", {
                                type: "tel",
                                name: "phone",
                                placeholder: "Phone",
                                value: form.phone,
                                onChange: handleChange,
                                className: "input input-bordered w-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("select", {
                                name: "purpose",
                                value: form.purpose,
                                onChange: handleChange,
                                className: "select select-bordered w-full",
                                children: [
                                    /*#__PURE__*/ _jsxDEV("option", {
                                        disabled: true,
                                        value: "",
                                        children: "Select Purpose"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("option", {
                                        children: "Consultation"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("option", {
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                                    /*#__PURE__*/ _jsxDEV("option", {
                                        children: "Business Inquiry"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("input", {
                                type: "date",
                                name: "date",
                                value: form.date,
                                onChange: handleChange,
                                className: "input input-bordered w-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("input", {
                                type: "time",
                                name: "time",
                                value: form.time,
                                onChange: handleChange,
                                className: "input input-bordered w-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("textarea", {
                                name: "message",
                                placeholder: "Message",
                                value: form.message,
                                onChange: handleChange,
                                className: "textarea textarea-bordered w-full",
                                rows: "4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e),
                            /*#__PURE__*/ _jsxDEV("button", {
                                type: "submit",
                                className: "btn btn-primary w-full",
                                children: "SUBMIT"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
        lineNumber: 25,
        columnNumber: 7
    }, /*TURBOPACK member replacement*/ __turbopack_context__.e)
}, void 0, false, {
    fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx",
    lineNumber: 24,
    columnNumber: 5
}, /*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/appointment/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppointmentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$src$2f$components$2f$ContactUs$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/src/components/ContactUs.jsx [app-rsc] (ecmascript)");
;
;
function AppointmentPage() {
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$src$2f$components$2f$ContactUs$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/Desktop/Astro/divine-miracle-frontend/src/app/appointment/page.js",
        lineNumber: 4,
        columnNumber: 4
    }, this);
}
}),
"[project]/Desktop/Astro/divine-miracle-frontend/src/app/appointment/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/Astro/divine-miracle-frontend/src/app/appointment/page.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__323972d4._.js.map