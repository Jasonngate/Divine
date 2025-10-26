module.exports = [
"[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceCardGallery",
    ()=>ServiceCardGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
;
;
const ServiceCardGallery = ({ title, media })=>{
    const isVideo = media && (media.endsWith('.mp4') || media.endsWith('.webm') || media.endsWith('.mov'));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] rounded-lg overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `aspect-square flex items-center justify-center relative overflow-hidden ${media ? '' : 'bg-gradient-to-br from-purple-600 to-purple-800'}`,
                children: media ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        !isVideo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-cover bg-center filter blur-md scale-110 opacity-50",
                            style: {
                                backgroundImage: `url(${media})`
                            }
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                            lineNumber: 16,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: media,
                            className: "w-full object-cover relative z-10",
                            muted: true,
                            loop: true,
                            autoPlay: true,
                            playsInline: true
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                            lineNumber: 23,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: media,
                            alt: title,
                            className: "h-full object-cover relative z-10"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                            lineNumber: 32,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-yellow-400 opacity-30 group-hover:opacity-50 transition-opacity duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 48
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                                lineNumber: 42,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-purple-600/20 to-purple-800/20"
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$src$2f$components$2f$ServiceCardGallery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/components/ServiceCardGallery.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Filter Button Component
const FilterButton = ({ category, label, activeFilter, onFilterChange })=>{
    const isActive = activeFilter === category;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>onFilterChange(category),
        className: `px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e]' : 'text-yellow-200 hover:text-yellow-400 hover:bg-yellow-400/10 border border-yellow-400/20 hover:border-yellow-400/40'}`,
        children: label
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Main Sacred Gallery Component
const SacredGallery = ()=>{
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const spellImages = [
        '/spells/1.jpeg',
        '/spells/2.jpeg',
        // '/spells/3.jpeg',
        '/spells/4.jpeg',
        '/spells/5.jpeg',
        '/spells/6.jpeg',
        '/spells/7.jpeg',
        '/spells/8.jpeg',
        '/spells/9.jpeg',
        '/spells/10.jpeg',
        '/spells/11.jpeg',
        '/spells/12.jpeg'
    ];
    const tarotImages = [
        '/tarot_reading/tt1.png',
        '/tarot_reading/tt2.jpg',
        '/tarot_reading/tt3.jpg',
        '/tarot_reading/tt4.jpg',
        '/tarot_reading/tt5.jpg',
        '/tarot_reading/tt6.jpg'
    ];
    const vastuImages = [
        '/vastu_consultation/vc_v_1.mp4',
        '/vastu_consultation/vc_v_2.mp4',
        '/vastu_consultation/vc_v_3.mp4',
        '/vastu_consultation/vc_v_4.mp4',
        '/vastu_consultation/vc_v_5.mp4'
    ];
    const NumerologyImages = [
        "numerology/n_v_1.mp4"
    ];
    // Gallery data
    const galleryData = [
        // Spells (12 items)
        ...spellImages.map((media, index)=>({
                id: index + 1,
                title: `SPELLS`,
                category: "SPELLS",
                filterCategory: "spells",
                media: media
            })),
        // Tarot Reading (6 items)
        ...tarotImages.map((media, index)=>({
                id: spellImages.length + index + 1,
                title: `TAROT READING`,
                category: "TAROT READING",
                filterCategory: "tarot",
                media: media
            })),
        // Vastu Consultation (5 items)
        ...vastuImages.map((media, index)=>({
                id: spellImages.length + tarotImages.length + index + 1,
                title: `VASTU CONSULTATION  `,
                category: "VASTU CONSULTATION",
                filterCategory: "vastu consultation",
                media: media
            })),
        ...NumerologyImages.map((media, index)=>({
                id: spellImages.length + tarotImages.length + vastuImages.length + index + 1,
                title: `NUMEROLOGY`,
                category: "NUMEROLOGY",
                filterCategory: "numerology",
                media: media
            })),
        // Other services (keeping as they were)
        {
            id: spellImages.length + tarotImages.length + vastuImages.length + NumerologyImages.length + 1,
            title: "ANGEL HEALING",
            category: "ANGEL HEALING",
            filterCategory: "angel"
        },
        {
            id: spellImages.length + tarotImages.length + vastuImages.length + NumerologyImages.length + 2,
            title: "ASTROLOGY READING",
            category: "ASTROLOGY",
            filterCategory: "astrology"
        }
    ];
    // Filter categories
    const filterCategories = [
        {
            category: 'all',
            label: 'All'
        },
        {
            category: 'spells',
            label: 'Spells'
        },
        {
            category: 'tarot',
            label: 'Tarot Reading'
        },
        {
            category: 'angel',
            label: 'Angel Healing'
        },
        {
            category: 'vastu consultation',
            label: 'Vastu Consultation'
        },
        {
            category: 'astrology',
            label: 'Astrology'
        },
        {
            category: 'numerology',
            label: 'Numerology'
        }
    ];
    // Filter gallery data
    const filteredData = activeFilter === 'all' ? galleryData : galleryData.filter((item)=>item.filterCategory === activeFilter);
    // Handle filter change
    const handleFilterChange = (category)=>{
        setActiveFilter(category);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-ad29d79574292cb5" + " " + "min-h-screen py-20 bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] text-[#FEF2CD] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ad29d79574292cb5" + " " + "absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-pink-700/20 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                lineNumber: 140,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ad29d79574292cb5" + " " + "absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-pink-800/20 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                lineNumber: 141,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ad29d79574292cb5" + " " + "absolute top-1/2 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] bg-yellow-400/10 rounded-full blur-3xl"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                lineNumber: 142,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ad29d79574292cb5" + " " + "max-w-7xl mx-auto text-center pb-12 px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "jsx-ad29d79574292cb5" + " " + "text-4xl font-cormorant md:text-5xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-3 pb-5",
                        children: "Sacred Gallery"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-ad29d79574292cb5" + " " + "text-yellow-200 text-xl max-w-3xl mx-auto leading-relaxed",
                        children: "Explore the mystical world of spiritual practices through our curated collection of sacred tools, healing spaces, and divine moments."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ad29d79574292cb5" + " " + "max-w-[90%] mx-auto px-4 mb-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-ad29d79574292cb5" + " " + "flex flex-wrap justify-center gap-3",
                    children: filterCategories.map(({ category, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterButton, {
                            category: category,
                            label: label,
                            activeFilter: activeFilter,
                            onFilterChange: handleFilterChange
                        }, category, false, {
                            fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                            lineNumber: 158,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                    lineNumber: 156,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ad29d79574292cb5" + " " + "max-w-[90%] mx-auto px-4 pb-16 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-ad29d79574292cb5" + " " + "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: filteredData.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                animationDelay: `${index * 0.1}s`
                            },
                            className: "jsx-ad29d79574292cb5" + " " + "opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$src$2f$components$2f$ServiceCardGallery$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ServiceCardGallery"], {
                                ...item
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, item.id, false, {
                            fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                    lineNumber: 171,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-ad29d79574292cb5" + " " + "max-w-4xl mx-auto text-center py-16 px-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "jsx-ad29d79574292cb5" + " " + "text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 text-transparent bg-clip-text mb-4",
                        children: "Experience the Sacred"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "jsx-ad29d79574292cb5" + " " + "text-yellow-200 text-lg mb-8 leading-relaxed",
                        children: "Ready to create your own spiritual experience? Book a session and begin your transformative journey with Dr. Jinal K."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-ad29d79574292cb5" + " " + "flex flex-col sm:flex-row gap-4 justify-center items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/booksession",
                                className: "jsx-ad29d79574292cb5" + " " + "relative group bg-gradient-to-r from-[#d4af37] via-[#ffd700] to-[#b8860b] text-[#3a0d1e] font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] hover:shadow-2xl border border-[#d4af37]/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-ad29d79574292cb5" + " " + "relative z-10",
                                        children: "Book Your Session"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-ad29d79574292cb5" + " " + "absolute inset-0 bg-gradient-to-r from-[#b8860b] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                                        lineNumber: 195,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/about",
                                className: "jsx-ad29d79574292cb5" + " " + "border border-yellow-400/40 text-yellow-400 font-semibold py-3 px-8 rounded-lg hover:bg-yellow-400/10 hover:border-yellow-400/60 transition-all duration-300",
                                children: "Learn More"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
                lineNumber: 185,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "ad29d79574292cb5",
                children: "@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/src/app/gallery/page.jsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SacredGallery;
}),
"[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Star
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s"
        }
    ]
];
const Star = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("star", __iconNode);
;
 //# sourceMappingURL=star.js.map
}),
"[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Star",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Astro$2f$divine$2d$miracle$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Astro/divine-miracle-frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=OneDrive_Desktop_Astro_divine-miracle-frontend_bb069091._.js.map