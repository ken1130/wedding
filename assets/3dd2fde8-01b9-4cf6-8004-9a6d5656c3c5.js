/* @ds-bundle: {"format":3,"namespace":"NofatDesignSystem_2c47dc","components":[{"name":"CoachBubble","sourcePath":"components/app/CoachBubble.jsx"},{"name":"ExerciseRow","sourcePath":"components/app/ExerciseRow.jsx"},{"name":"ListRow","sourcePath":"components/app/ListRow.jsx"},{"name":"MealCard","sourcePath":"components/app/MealCard.jsx"},{"name":"MediaPlaceholder","sourcePath":"components/app/MediaPlaceholder.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"MetricRing","sourcePath":"components/feedback/MetricRing.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"AppBar","sourcePath":"components/navigation/AppBar.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"}],"sourceHashes":{"components/app/CoachBubble.jsx":"6df5bc1c7343","components/app/ExerciseRow.jsx":"88558364e687","components/app/ListRow.jsx":"6b7541d3a8d6","components/app/MealCard.jsx":"76350f82bf30","components/app/MediaPlaceholder.jsx":"19aa36907917","components/brand/Logo.jsx":"5b22777b9828","components/core/Avatar.jsx":"18baa1b71376","components/core/Button.jsx":"837ae73871b6","components/core/Card.jsx":"31cd469d417c","components/core/Icon.jsx":"afea55c2b296","components/core/IconButton.jsx":"37a18990b167","components/core/styleInject.js":"6a00639bc883","components/feedback/Badge.jsx":"89284cab0a4f","components/feedback/MetricRing.jsx":"ab95f1b515c6","components/feedback/ProgressBar.jsx":"8cf436d14faa","components/feedback/Tag.jsx":"650a3d57cadc","components/forms/Checkbox.jsx":"1c938c71bbc8","components/forms/Input.jsx":"b94bc1d2ac1e","components/forms/Radio.jsx":"7ca0f68c5a61","components/forms/SegmentedControl.jsx":"7d15a61685b1","components/forms/Stepper.jsx":"67878b9613e4","components/forms/Switch.jsx":"8a1801135e95","components/navigation/AppBar.jsx":"9ffe724bc292","components/navigation/BottomNav.jsx":"e6bf853f9f4d","ui_kits/nofat/EveningReviewScreen.jsx":"db12d97f9f58","ui_kits/nofat/ExerciseDetailScreen.jsx":"fa771cf95bf2","ui_kits/nofat/LoginScreen.jsx":"0ea2e13a5df5","ui_kits/nofat/OnboardingScreen.jsx":"6aabf1ad4ea6","ui_kits/nofat/TodayScreen.jsx":"275bc6ede5c4","ui_kits/nofat/TrainingScreen.jsx":"15e1988eaaaf","ui_kits/nofat/WeeklyReportScreen.jsx":"01c71df953fe","ui_kits/nofat/app.jsx":"17818772369c","ui_kits/nofat/frame.jsx":"9806e1f21836"},"inlinedExternals":[],"unexposedExports":[{"name":"injectCss","sourcePath":"components/core/styleInject.js"}]} */

(() => {

const __ds_ns = (window.NofatDesignSystem_2c47dc = window.NofatDesignSystem_2c47dc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The nofat ring mark — a daily-plan progress ring with an energy core. */
function Mark({
  px = 32,
  onDark = false
}) {
  const ringTrack = onDark ? "rgba(255,255,255,0.30)" : "var(--green-200)";
  const ring = onDark ? "#fff" : "var(--color-primary)";
  return /*#__PURE__*/React.createElement("svg", {
    width: px,
    height: px,
    viewBox: "0 0 512 512",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "170",
    stroke: ringTrack,
    strokeWidth: "58"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "170",
    stroke: ring,
    strokeWidth: "58",
    strokeLinecap: "round",
    strokeDasharray: "800 1068",
    transform: "rotate(-90 256 256)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "256",
    cy: "256",
    r: "66",
    fill: "var(--color-accent)"
  }));
}

/**
 * Logo — nofat brand mark and wordmark. "fat" is set in brand green so the
 * name reads as the promise: no · fat.
 */
function Logo({
  variant = "lockup",
  size = 28,
  onDark = false,
  className = "",
  style,
  ...rest
}) {
  const ink = onDark ? "#fff" : "var(--text-primary)";
  const wordmark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: size,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: ink,
      userSelect: "none"
    }
  }, "no", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--color-primary)"
    }
  }, "fat"));
  if (variant === "wordmark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: style
    }, rest), wordmark);
  }
  if (variant === "mark") {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: {
        display: "inline-flex",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(Mark, {
      px: size,
      onDark: onDark
    }));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: size * 0.32,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Mark, {
    px: size * 1.05,
    onDark: onDark
  }), wordmark);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Curated Lucide icon set (ISC licensed, lucide.dev), drawn at 24×24 with
   2px round strokes. Embedded inline so the design-system bundle stays
   self-contained — no CDN dependency. Add new glyphs to PATHS as needed. */
const PATHS = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  "chevron-right": '<path d="m9 18 6-6-6-6"/>',
  "chevron-left": '<path d="m15 18-6-6 6-6"/>',
  "chevron-down": '<path d="m6 9 6 6 6-6"/>',
  "arrow-right": '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  "arrow-left": '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  minus: '<path d="M5 12h14"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  "alert-triangle": '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye: '<path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/>',
  "eye-off": '<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  "trending-up": '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
  "trending-down": '<path d="M16 17h6v-6"/><path d="m22 17-8.5-8.5-5 5L2 7"/>',
  "message-circle": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  "chef-hat": '<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"/><path d="M6 17h12"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  "check-circle": '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  circle: '<circle cx="12" cy="12" r="10"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  "more-horizontal": '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  scale: '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  dumbbell: '<path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/>',
  apple: '<path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/><path d="M10 2c1 .5 2 2 2 5"/>'
};

/**
 * Icon — renders a glyph from nofat's curated Lucide set.
 */
function Icon({
  name,
  size = 22,
  color = "currentColor",
  strokeWidth = 2,
  fill = "none",
  style,
  ...rest
}) {
  const inner = PATHS[name];
  if (!inner) {
    if (typeof console !== "undefined") console.warn("Icon: unknown name", name);
    return null;
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: inner
    }
  }, rest));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/styleInject.js
try { (() => {
/* Injects a component's stylesheet into <head> exactly once.
   Lets components keep :hover / :active / :focus-visible states while still
   driving every value from the CSS custom properties in tokens/. */
const done = new Set();
function injectCss(id, css) {
  if (typeof document === "undefined" || done.has(id)) return;
  done.add(id);
  const s = document.createElement("style");
  s.setAttribute("data-nf", id);
  s.textContent = css;
  document.head.appendChild(s);
}
Object.assign(__ds_scope, { injectCss });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/styleInject.js", error: String((e && e.message) || e) }); }

// components/app/ListRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-listrow", `
  .nf-listrow{ display:flex; align-items:center; gap:13px; width:100%; box-sizing:border-box;
    padding:13px 4px; background:transparent; text-align:left; border:none;
    -webkit-tap-highlight-color:transparent; }
  .nf-listrow--button{ cursor:pointer; }
  .nf-listrow__ico{ width:38px; height:38px; border-radius:11px; flex:none; display:flex;
    align-items:center; justify-content:center; background:var(--color-primary-soft);
    color:var(--color-primary-press); }
  .nf-listrow__main{ flex:1; min-width:0; }
  .nf-listrow__title{ font-family:var(--font-body); font-weight:var(--weight-semibold); font-size:15px;
    color:var(--text-primary); line-height:1.35; }
  .nf-listrow__sub{ font-family:var(--font-body); font-weight:var(--weight-medium); font-size:13px;
    color:var(--text-tertiary); margin-top:2px; }
  .nf-listrow__trail{ flex:none; display:flex; align-items:center; gap:8px; color:var(--text-tertiary);
    font-family:var(--font-body); font-weight:var(--weight-semibold); font-size:14px; }
  .nf-listrow__div{ height:1px; background:var(--border-subtle); margin-left:51px; }
  `);
const TONES = {
  primary: ["var(--color-primary-soft)", "var(--color-primary-press)"],
  accent: ["var(--color-accent-soft)", "var(--coral-700)"],
  info: ["var(--sky-100)", "var(--sky-700)"],
  warning: ["var(--amber-100)", "var(--amber-700)"],
  neutral: ["var(--ink-100)", "var(--ink-600)"]
};

/**
 * ListRow — a settings / menu / section row: icon, title, optional subtitle,
 * and a trailing value, chevron, or control.
 */
function ListRow({
  icon,
  iconTone = "primary",
  title,
  subtitle,
  value,
  trailing,
  chevron = false,
  onClick,
  divider = false,
  className = "",
  style,
  ...rest
}) {
  const Tag = onClick ? "button" : "div";
  const [bg, fg] = TONES[iconTone] || TONES.primary;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tag, _extends({
    className: ["nf-listrow", onClick ? "nf-listrow--button" : "", className].filter(Boolean).join(" "),
    style: style,
    onClick: onClick
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "nf-listrow__ico",
    style: {
      background: bg,
      color: fg
    }
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19
  }) : icon), /*#__PURE__*/React.createElement("span", {
    className: "nf-listrow__main"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nf-listrow__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    className: "nf-listrow__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("span", {
    className: "nf-listrow__trail"
  }, value, trailing, chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 19
  }))), divider && /*#__PURE__*/React.createElement("div", {
    className: "nf-listrow__div"
  }));
}
Object.assign(__ds_scope, { ListRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ListRow.jsx", error: String((e && e.message) || e) }); }

// components/app/MediaPlaceholder.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-media", `
  .nf-media{ position:relative; overflow:hidden; border-radius:var(--radius-md);
    display:flex; align-items:center; justify-content:center; flex:none; }
  .nf-media img{ width:100%; height:100%; object-fit:cover; display:block; }
  .nf-media__ph{ position:absolute; inset:0; display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:6px; }
  .nf-media__ph-label{ font-family:var(--font-body); font-weight:600; font-size:12px; }
  .nf-media--food{ background:
    radial-gradient(120% 120% at 25% 15%, var(--coral-100), transparent 60%),
    linear-gradient(135deg, var(--coral-50), #FFF3EE); }
  .nf-media--food .nf-media__ph{ color:var(--coral-400); }
  .nf-media--exercise{ background:
    radial-gradient(120% 120% at 25% 15%, var(--green-100), transparent 60%),
    linear-gradient(135deg, var(--green-50), #EEFBF4); }
  .nf-media--exercise .nf-media__ph{ color:var(--green-400); }
  .nf-media--neutral{ background:var(--ink-100); }
  .nf-media--neutral .nf-media__ph{ color:var(--ink-400); }
  `);
const ICONS = {
  food: "utensils",
  exercise: "dumbbell",
  neutral: "image"
};

/**
 * MediaPlaceholder — a tasteful slot for food / exercise imagery. Shows a real
 * photo when `src` is set, otherwise an on-brand tinted placeholder. Use real
 * photography in production; the placeholder reads as intentional in mocks.
 */
function MediaPlaceholder({
  src,
  tone = "food",
  icon,
  label,
  width = "100%",
  height = 120,
  radius,
  className = "",
  style,
  ...rest
}) {
  const cls = ["nf-media", `nf-media--${tone}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      width,
      height,
      borderRadius: radius,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label || ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "nf-media__ph"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || ICONS[tone] || "image",
    size: 26,
    strokeWidth: 1.8
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "nf-media__ph-label"
  }, label)));
}
Object.assign(__ds_scope, { MediaPlaceholder });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/MediaPlaceholder.jsx", error: String((e && e.message) || e) }); }

// components/app/ExerciseRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-exrow", `
  .nf-exrow{ display:flex; align-items:center; gap:13px; padding:10px; border-radius:var(--radius-md);
    background:var(--surface-card); width:100%; box-sizing:border-box; text-align:left;
    -webkit-tap-highlight-color:transparent; transition:background var(--dur-fast); }
  .nf-exrow--button{ border:none; cursor:pointer; }
  .nf-exrow--button:hover{ background:var(--ink-50); }
  .nf-exrow--button:active{ transform:scale(0.99); }
  .nf-exrow--done{ background:var(--green-50); }
  .nf-exrow__thumb{ position:relative; flex:none; }
  .nf-exrow__idx{ position:absolute; top:-5px; left:-5px; width:20px; height:20px; border-radius:50%;
    background:var(--ink-800); color:#fff; font-family:var(--font-number); font-weight:var(--weight-bold);
    font-size:11px; display:flex; align-items:center; justify-content:center; }
  .nf-exrow__main{ flex:1; min-width:0; }
  .nf-exrow__name{ font-family:var(--font-display); font-weight:var(--weight-bold); font-size:16px;
    color:var(--text-primary); line-height:1.3; }
  .nf-exrow__name--done{ color:var(--text-tertiary); text-decoration:line-through; text-decoration-color:var(--green-400); }
  .nf-exrow__meta{ display:flex; align-items:center; gap:12px; margin-top:4px; }
  .nf-exrow__stat{ display:inline-flex; align-items:center; gap:5px; font-family:var(--font-body);
    font-weight:var(--weight-semibold); font-size:13px; color:var(--text-secondary); }
  .nf-exrow__stat b{ font-family:var(--font-number); font-weight:var(--weight-bold); color:var(--text-primary);
    font-variant-numeric:tabular-nums; }
  .nf-exrow__trail{ flex:none; display:flex; align-items:center; color:var(--text-tertiary); }
  .nf-exrow__check{ width:30px; height:30px; border-radius:50%; flex:none; display:flex; align-items:center;
    justify-content:center; background:var(--surface-card); box-shadow:inset 0 0 0 2px var(--border-strong);
    color:#fff; transition:all var(--dur-fast) var(--ease-spring); }
  .nf-exrow__check--on{ background:var(--color-primary); box-shadow:inset 0 0 0 2px var(--color-primary); }
  .nf-exrow__checkbtn{ border:none; background:transparent; padding:0; cursor:pointer; display:flex;
    -webkit-tap-highlight-color:transparent; }
  .nf-exrow__checkbtn:active{ transform:scale(0.9); }
  `);

/**
 * ExerciseRow — one movement in a training plan. `mode="link"` shows a chevron
 * into the detail; `mode="check"` shows a check-off circle for execution.
 */
function ExerciseRow({
  index,
  name,
  sets,
  reps,
  rest,
  detail,
  image,
  mode = "link",
  checked = false,
  onToggle,
  onOpen,
  className = "",
  style,
  ...rest_
}) {
  const isCheck = mode === "check";
  const rowOpens = !!onOpen;
  const Tag = rowOpens || isCheck && onToggle ? "button" : "div";
  const interactive = Tag === "button";
  const cls = ["nf-exrow", interactive ? "nf-exrow--button" : "", isCheck && checked ? "nf-exrow--done" : "", className].filter(Boolean).join(" ");
  const handleClick = () => {
    if (rowOpens) onOpen();else if (isCheck && onToggle) onToggle(!checked);
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    style: style,
    onClick: interactive ? handleClick : undefined
  }, rest_), /*#__PURE__*/React.createElement("div", {
    className: "nf-exrow__thumb"
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaPlaceholder, {
    tone: "exercise",
    src: image,
    width: 52,
    height: 52,
    radius: 12,
    icon: "dumbbell"
  }), index != null && /*#__PURE__*/React.createElement("span", {
    className: "nf-exrow__idx"
  }, index)), /*#__PURE__*/React.createElement("div", {
    className: "nf-exrow__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: ["nf-exrow__name", isCheck && checked ? "nf-exrow__name--done" : ""].filter(Boolean).join(" ")
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "nf-exrow__meta"
  }, detail ? /*#__PURE__*/React.createElement("span", {
    className: "nf-exrow__stat"
  }, detail) : /*#__PURE__*/React.createElement("span", {
    className: "nf-exrow__stat"
  }, /*#__PURE__*/React.createElement("b", null, sets), " \u7EC4 \xD7 ", /*#__PURE__*/React.createElement("b", null, reps)), rest && /*#__PURE__*/React.createElement("span", {
    className: "nf-exrow__stat"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "timer",
    size: 13,
    color: "var(--text-tertiary)"
  }), "\u4F11\u606F ", /*#__PURE__*/React.createElement("b", null, rest), "s"))), /*#__PURE__*/React.createElement("div", {
    className: "nf-exrow__trail"
  }, isCheck ? onToggle ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nf-exrow__checkbtn",
    "aria-label": "\u6807\u8BB0\u5B8C\u6210",
    onClick: e => {
      e.stopPropagation();
      onToggle(!checked);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: ["nf-exrow__check", checked ? "nf-exrow__check--on" : ""].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 17,
    strokeWidth: 3,
    color: "#fff"
  }))) : /*#__PURE__*/React.createElement("span", {
    className: ["nf-exrow__check", checked ? "nf-exrow__check--on" : ""].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 17,
    strokeWidth: 3,
    color: "#fff"
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20
  })));
}
Object.assign(__ds_scope, { ExerciseRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/ExerciseRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-avatar", `
  .nf-avatar{ position:relative; display:inline-flex; align-items:center; justify-content:center;
    border-radius:var(--radius-pill); overflow:hidden; flex:none; font-family:var(--font-display);
    font-weight:var(--weight-bold); color:#fff; background:var(--color-primary); user-select:none; }
  .nf-avatar img{ width:100%; height:100%; object-fit:cover; display:block; }
  .nf-avatar--coach{ background:radial-gradient(120% 120% at 30% 20%, var(--green-400), var(--green-600)); }
  .nf-avatar__ring{ position:absolute; inset:-3px; border-radius:var(--radius-pill);
    box-shadow:0 0 0 3px var(--surface-card), 0 0 0 5px var(--color-primary); pointer-events:none; }
  .nf-avatar__dot{ position:absolute; right:0; bottom:0; width:28%; height:28%; min-width:9px; min-height:9px;
    border-radius:var(--radius-pill); background:var(--color-success); box-shadow:0 0 0 2.5px var(--surface-card); }
  `);
const SIZES = {
  xs: 28,
  sm: 36,
  md: 44,
  lg: 56,
  xl: 72
};

/** Friendly coach face mark — simple, on-brand, no external asset. */
function CoachFace({
  px
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    width: px,
    height: px,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "20.5",
    r: "3.1",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "34",
    cy: "20.5",
    r: "3.1",
    fill: "#fff"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24.9",
    cy: "21.2",
    r: "1.35",
    fill: "var(--green-700)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "34.9",
    cy: "21.2",
    r: "1.35",
    fill: "var(--green-700)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 28c2.4 2.6 8 2.6 12.6 0",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 18c1.2-5.5 5.5-9 11-9",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    opacity: "0.9"
  }));
}

/**
 * Avatar — a person, or Coach Nuo (诺教练). Renders image, initials, or the coach mark.
 */
function Avatar({
  src,
  name,
  coach = false,
  size = "md",
  ring = false,
  online = false,
  className = "",
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size : SIZES[size] || 44;
  const initials = name ? name.trim().slice(0, 2) : null;
  const cls = ["nf-avatar", coach ? "nf-avatar--coach" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    style: {
      width: px,
      height: px,
      fontSize: px * 0.4,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name || ""
  }) : coach ? /*#__PURE__*/React.createElement(CoachFace, {
    px: px * 0.92
  }) : initials, ring && /*#__PURE__*/React.createElement("span", {
    className: "nf-avatar__ring"
  }), online && /*#__PURE__*/React.createElement("span", {
    className: "nf-avatar__dot"
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/app/CoachBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-coach", `
  .nf-coach{ display:flex; gap:11px; align-items:flex-end; }
  .nf-coach__col{ display:flex; flex-direction:column; gap:6px; min-width:0; flex:1; }
  .nf-coach__name{ font-family:var(--font-body); font-weight:var(--weight-bold); font-size:13px;
    color:var(--text-secondary); padding-left:4px; display:flex; align-items:center; gap:6px; }
  .nf-coach__time{ font-weight:var(--weight-medium); color:var(--text-tertiary); font-size:12px; }
  .nf-coach__bubble{ background:var(--surface-card); border-radius:6px var(--radius-lg) var(--radius-lg) var(--radius-lg);
    padding:14px 16px; box-shadow:var(--shadow-card); font-family:var(--font-body);
    font-weight:var(--weight-medium); font-size:15px; line-height:1.6; color:var(--text-primary);
    text-wrap:pretty; }
  .nf-coach__bubble strong{ font-weight:var(--weight-bold); color:var(--color-primary-press); }
  .nf-coach--tint .nf-coach__bubble{ background:var(--color-primary-tint); box-shadow:none; }
  .nf-coach--warm .nf-coach__bubble{ background:var(--color-accent-tint); box-shadow:none; }
  .nf-coach--plain .nf-coach__bubble{ background:transparent; box-shadow:none; padding:2px 4px; }
  `);

/**
 * CoachBubble — a message from Coach Nuo (诺教练): avatar + a warm,
 * human-voiced bubble. Used for greetings and the evening review.
 */
function CoachBubble({
  children,
  name = "诺教练",
  time,
  tone = "default",
  showAvatar = true,
  avatarSize = 40,
  className = "",
  style,
  ...rest
}) {
  const cls = ["nf-coach", tone !== "default" ? `nf-coach--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), showAvatar && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    coach: true,
    size: avatarSize
  }), /*#__PURE__*/React.createElement("div", {
    className: "nf-coach__col"
  }, (name || time) && /*#__PURE__*/React.createElement("div", {
    className: "nf-coach__name"
  }, name, time && /*#__PURE__*/React.createElement("span", {
    className: "nf-coach__time"
  }, "\xB7 ", time)), /*#__PURE__*/React.createElement("div", {
    className: "nf-coach__bubble"
  }, children)));
}
Object.assign(__ds_scope, { CoachBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/CoachBubble.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-button", `
  @keyframes nf-spin { to { transform: rotate(360deg); } }
  .nf-btn{ font-family:var(--font-body); font-weight:var(--weight-bold); border:none;
    cursor:pointer; display:inline-flex; align-items:center; justify-content:center;
    gap:8px; border-radius:var(--radius-pill); position:relative; white-space:nowrap;
    user-select:none; -webkit-tap-highlight-color:transparent; letter-spacing:0;
    transition:transform var(--dur-fast) var(--ease-out), background var(--dur-fast) ease, box-shadow var(--dur-fast) ease, opacity var(--dur-fast); }
  .nf-btn:active:not(:disabled){ transform:scale(0.97); }
  .nf-btn:disabled{ opacity:.42; cursor:not-allowed; box-shadow:none; }
  .nf-btn:focus-visible{ outline:none; box-shadow:0 0 0 4px var(--focus-ring); }
  .nf-btn--sm{ height:38px; padding:0 16px; font-size:14px; }
  .nf-btn--md{ height:48px; padding:0 22px; font-size:15px; }
  .nf-btn--lg{ height:54px; padding:0 26px; font-size:17px; }
  .nf-btn--full{ width:100%; }
  .nf-btn--primary{ background:var(--color-primary); color:var(--text-on-primary); box-shadow:var(--shadow-primary); }
  .nf-btn--primary:hover:not(:disabled){ background:var(--color-primary-hover); }
  .nf-btn--accent{ background:var(--color-accent); color:#fff; box-shadow:var(--shadow-accent); }
  .nf-btn--accent:hover:not(:disabled){ background:var(--color-accent-hover); }
  .nf-btn--secondary{ background:var(--color-primary-soft); color:var(--color-primary-press); }
  .nf-btn--secondary:hover:not(:disabled){ background:var(--green-200); }
  .nf-btn--outline{ background:var(--surface-card); color:var(--text-primary); box-shadow:inset 0 0 0 1.5px var(--border-default); }
  .nf-btn--outline:hover:not(:disabled){ background:var(--ink-50); }
  .nf-btn--ghost{ background:transparent; color:var(--color-primary-press); }
  .nf-btn--ghost:hover:not(:disabled){ background:var(--color-primary-tint); }
  .nf-btn--danger{ background:var(--red-100); color:var(--red-700); }
  .nf-btn--danger:hover:not(:disabled){ background:#FBD0D2; }
  .nf-btn__spin{ width:18px; height:18px; border-radius:50%; border:2.5px solid currentColor;
    border-top-color:transparent; animation:nf-spin .7s linear infinite; }
  .nf-btn__hide{ visibility:hidden; }
  `);

/**
 * Button — nofat's primary call-to-action. Pill-shaped, soft colored elevation.
 */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["nf-btn", `nf-btn--${variant}`, `nf-btn--${size}`, fullWidth ? "nf-btn--full" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled || loading
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "nf-btn__spin",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    className: loading ? "nf-btn__hide" : "",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, leftIcon, children, rightIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-card", `
  .nf-card{ background:var(--surface-card); border-radius:var(--radius-card);
    box-shadow:var(--shadow-card); padding:var(--card-pad); position:relative;
    box-sizing:border-box; }
  .nf-card--flat{ box-shadow:none; border:1px solid var(--border-subtle); }
  .nf-card--sunken{ background:var(--surface-sunken); box-shadow:none; }
  .nf-card--tint{ background:var(--color-primary-tint); box-shadow:none; }
  .nf-card--warm{ background:var(--color-accent-tint); box-shadow:none; }
  .nf-card--pad-lg{ padding:var(--card-pad-lg); }
  .nf-card--pad-none{ padding:0; }
  .nf-card--interactive{ cursor:pointer; transition:transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) ease; -webkit-tap-highlight-color:transparent; }
  .nf-card--interactive:active{ transform:scale(0.985); box-shadow:var(--shadow-sm); }
  `);

/**
 * Card — nofat's base surface: white, 20px radius, soft low shadow.
 */
function Card({
  variant = "raised",
  padding = "default",
  interactive = false,
  className = "",
  children,
  style,
  ...rest
}) {
  const map = {
    raised: "",
    flat: "nf-card--flat",
    sunken: "nf-card--sunken",
    tint: "nf-card--tint",
    warm: "nf-card--warm"
  };
  const padMap = {
    default: "",
    lg: "nf-card--pad-lg",
    none: "nf-card--pad-none"
  };
  const cls = ["nf-card", map[variant] || "", padMap[padding] || "", interactive ? "nf-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-iconbtn", `
  .nf-iconbtn{ display:inline-flex; align-items:center; justify-content:center;
    border:none; cursor:pointer; border-radius:var(--radius-pill); flex:none;
    color:var(--text-primary); background:transparent; -webkit-tap-highlight-color:transparent;
    transition:background var(--dur-fast) ease, transform var(--dur-fast) var(--ease-out); }
  .nf-iconbtn:active:not(:disabled){ transform:scale(0.92); }
  .nf-iconbtn:disabled{ opacity:.4; cursor:not-allowed; }
  .nf-iconbtn:focus-visible{ outline:none; box-shadow:0 0 0 4px var(--focus-ring); }
  .nf-iconbtn--sm{ width:34px; height:34px; }
  .nf-iconbtn--md{ width:42px; height:42px; }
  .nf-iconbtn--lg{ width:48px; height:48px; }
  .nf-iconbtn--ghost:hover:not(:disabled){ background:var(--ink-100); }
  .nf-iconbtn--soft{ background:var(--ink-100); }
  .nf-iconbtn--soft:hover:not(:disabled){ background:var(--ink-150); }
  .nf-iconbtn--primary{ background:var(--color-primary-soft); color:var(--color-primary-press); }
  .nf-iconbtn--primary:hover:not(:disabled){ background:var(--green-200); }
  .nf-iconbtn--solid{ background:var(--color-primary); color:#fff; box-shadow:var(--shadow-primary); }
  .nf-iconbtn--solid:hover:not(:disabled){ background:var(--color-primary-hover); }
  `);

/**
 * IconButton — a square, pill-cornered tap target wrapping a single Icon.
 */
function IconButton({
  variant = "ghost",
  size = "md",
  className = "",
  children,
  "aria-label": ariaLabel,
  ...rest
}) {
  const cls = ["nf-iconbtn", `nf-iconbtn--${variant}`, `nf-iconbtn--${size}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    "aria-label": ariaLabel
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-badge", `
  .nf-badge{ display:inline-flex; align-items:center; gap:5px; font-family:var(--font-body);
    font-weight:var(--weight-bold); font-size:12px; line-height:1; padding:5px 10px;
    border-radius:var(--radius-pill); white-space:nowrap; }
  .nf-badge--lg{ font-size:13px; padding:7px 12px; }
  .nf-badge__dot{ width:6px; height:6px; border-radius:50%; background:currentColor; }
  .nf-badge--neutral{ background:var(--ink-100); color:var(--ink-600); }
  .nf-badge--primary{ background:var(--color-primary-soft); color:var(--color-primary-press); }
  .nf-badge--accent{ background:var(--color-accent-soft); color:var(--coral-700); }
  .nf-badge--success{ background:var(--green-100); color:var(--green-700); }
  .nf-badge--warning{ background:var(--amber-100); color:var(--amber-700); }
  .nf-badge--danger{ background:var(--red-100); color:var(--red-700); }
  .nf-badge--info{ background:var(--sky-100); color:var(--sky-700); }
  .nf-badge--solid{ background:var(--color-primary); color:#fff; }
  `);

/**
 * Badge — compact status / count pill.
 */
function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  leftIcon,
  className = "",
  children,
  ...rest
}) {
  const cls = ["nf-badge", `nf-badge--${variant}`, size === "lg" ? "nf-badge--lg" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "nf-badge__dot"
  }), leftIcon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/app/MealCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
__ds_scope.injectCss("nf-meal", `
  .nf-meal{ overflow:hidden; }
  .nf-meal__banner{ position:relative; }
  .nf-meal__chip{ position:absolute; top:12px; left:12px; display:inline-flex; align-items:center; gap:6px;
    background:rgba(255,255,255,0.92); backdrop-filter:blur(6px); border-radius:var(--radius-pill);
    padding:6px 12px 6px 8px; font-family:var(--font-body); font-weight:var(--weight-bold);
    font-size:13px; color:var(--text-primary); box-shadow:var(--shadow-xs); }
  .nf-meal__chip-ico{ display:flex; color:var(--color-primary); }
  .nf-meal__cal{ position:absolute; top:12px; right:12px; display:inline-flex; align-items:baseline; gap:3px;
    background:rgba(255,255,255,0.92); backdrop-filter:blur(6px); border-radius:var(--radius-pill);
    padding:6px 12px; box-shadow:var(--shadow-xs); }
  .nf-meal__cal b{ font-family:var(--font-number); font-weight:var(--weight-extra); font-size:17px;
    color:var(--color-calorie); font-variant-numeric:tabular-nums; }
  .nf-meal__cal span{ font-family:var(--font-body); font-weight:600; font-size:11px; color:var(--text-tertiary); }
  .nf-meal__body{ padding:14px 16px 16px; }
  .nf-meal__name{ font-family:var(--font-display); font-weight:var(--weight-bold); font-size:19px;
    line-height:1.3; color:var(--text-primary); margin:0; }
  .nf-meal__portion{ display:flex; align-items:center; gap:6px; margin-top:6px; color:var(--text-secondary);
    font-family:var(--font-body); font-weight:var(--weight-medium); font-size:13px; }
  .nf-meal__tags{ display:flex; flex-wrap:wrap; gap:7px; margin-top:12px; }
  .nf-meal__toggle{ display:flex; align-items:center; justify-content:space-between; width:100%;
    margin-top:14px; padding:11px 14px; border:none; cursor:pointer; background:var(--ink-50);
    border-radius:var(--radius-sm); font-family:var(--font-body); font-weight:var(--weight-semibold);
    font-size:14px; color:var(--text-primary); -webkit-tap-highlight-color:transparent;
    transition:background var(--dur-fast); }
  .nf-meal__toggle:hover{ background:var(--ink-100); }
  .nf-meal__toggle-l{ display:flex; align-items:center; gap:8px; }
  .nf-meal__toggle-ico{ color:var(--color-primary); display:flex; transition:transform var(--dur-base) var(--ease-out); }
  .nf-meal__toggle-ico--open{ transform:rotate(180deg); }
  .nf-meal__detail{ margin-top:12px; display:flex; flex-direction:column; gap:12px; }
  .nf-meal__block-h{ font-family:var(--font-body); font-weight:var(--weight-bold); font-size:13px;
    color:var(--text-secondary); display:flex; align-items:center; gap:7px; margin-bottom:8px; }
  .nf-meal__order{ background:var(--color-accent-tint); border-radius:var(--radius-sm); padding:12px 14px;
    font-family:var(--font-body); font-weight:var(--weight-medium); font-size:14px; line-height:1.55;
    color:var(--coral-700); text-wrap:pretty; }
  .nf-meal__steps{ margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:10px; counter-reset:step; }
  .nf-meal__steps li{ display:flex; gap:10px; font-family:var(--font-body); font-weight:var(--weight-medium);
    font-size:14px; line-height:1.5; color:var(--text-primary); }
  .nf-meal__steps li::before{ counter-increment:step; content:counter(step); flex:none; width:22px; height:22px;
    border-radius:50%; background:var(--color-primary-soft); color:var(--color-primary-press);
    font-family:var(--font-number); font-weight:var(--weight-bold); font-size:12px; display:flex;
    align-items:center; justify-content:center; }
  .nf-meal__footer{ display:flex; gap:10px; margin-top:16px; }
  .nf-meal__status{ display:flex; align-items:center; gap:10px; margin-top:16px; padding:12px 14px;
    border-radius:var(--radius-sm); font-family:var(--font-body); font-size:14px; }
  .nf-meal__status--done{ background:var(--green-100); color:var(--green-700); font-weight:var(--weight-semibold); }
  .nf-meal__status--skipped{ background:var(--ink-100); color:var(--text-secondary); font-weight:var(--weight-medium); }
  .nf-meal__status-ico{ flex:none; display:flex; }
  .nf-meal__undo{ margin-left:auto; border:none; background:transparent; cursor:pointer;
    font-family:var(--font-body); font-weight:var(--weight-semibold); font-size:13px; color:inherit;
    opacity:.7; text-decoration:underline; }
  `);
const MEALS = {
  breakfast: {
    label: "早餐",
    icon: "leaf"
  },
  lunch: {
    label: "午餐",
    icon: "utensils"
  },
  dinner: {
    label: "晚餐",
    icon: "moon"
  }
};

/**
 * MealCard — one meal in the daily prescription. Appetizing banner, name +
 * portion + calories, expandable ordering tip / recipe steps, and the
 * 没照做 / 照做了 actions. Emphasizes "管饱 / 不挨饿".
 */
function MealCard({
  meal = "breakfast",
  time,
  image,
  name,
  portion,
  calories,
  tags = [],
  orderTip,
  recipeSteps,
  status = null,
  defaultExpanded = false,
  onDone,
  onSkip,
  onReset,
  className = "",
  style,
  ...rest
}) {
  const [open, setOpen] = useState(defaultExpanded);
  const m = MEALS[meal] || MEALS.breakfast;
  const hasDetail = orderTip || recipeSteps && recipeSteps.length;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    padding: "none",
    className: ["nf-meal", className].filter(Boolean).join(" "),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__banner"
  }, /*#__PURE__*/React.createElement(__ds_scope.MediaPlaceholder, {
    tone: "food",
    src: image,
    height: 132,
    radius: 0,
    label: image ? undefined : name
  }), /*#__PURE__*/React.createElement("span", {
    className: "nf-meal__chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nf-meal__chip-ico"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: m.icon,
    size: 15
  })), m.label, time ? ` · ${time}` : ""), calories != null && /*#__PURE__*/React.createElement("span", {
    className: "nf-meal__cal"
  }, /*#__PURE__*/React.createElement("b", null, calories), /*#__PURE__*/React.createElement("span", null, "kcal"))), /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "nf-meal__name"
  }, name), portion && /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__portion"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "utensils",
    size: 14,
    color: "var(--text-tertiary)"
  }), portion), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__tags"
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: i,
    variant: t.variant || "primary",
    leftIcon: t.icon
  }, t.label || t))), hasDetail && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    className: "nf-meal__toggle",
    onClick: () => setOpen(o => !o),
    "aria-expanded": open
  }, /*#__PURE__*/React.createElement("span", {
    className: "nf-meal__toggle-l"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: recipeSteps ? "chef-hat" : "message-circle",
    size: 16,
    color: "var(--color-primary)"
  }), recipeSteps ? "菜谱步骤" : "点菜指令"), /*#__PURE__*/React.createElement("span", {
    className: ["nf-meal__toggle-ico", open ? "nf-meal__toggle-ico--open" : ""].join(" ")
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18
  }))), open && /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__detail"
  }, orderTip && /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__order"
  }, orderTip), recipeSteps && recipeSteps.length > 0 && /*#__PURE__*/React.createElement("ol", {
    className: "nf-meal__steps"
  }, recipeSteps.map((s, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, s))))), status === "done" ? /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__status nf-meal__status--done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nf-meal__status-ico"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check-circle",
    size: 18,
    color: "var(--green-600)"
  })), "\u7167\u505A\u4E86\uFF0C\u5B89\u6392\u5F97\u660E\u660E\u767D\u767D", onReset && /*#__PURE__*/React.createElement("button", {
    className: "nf-meal__undo",
    onClick: onReset
  }, "\u64A4\u9500")) : status === "skipped" ? /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__status nf-meal__status--skipped"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nf-meal__status-ico"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "info",
    size: 18,
    color: "var(--text-tertiary)"
  })), "\u6CA1\u4E8B\uFF0C\u4E0B\u4E00\u987F\u7EE7\u7EED\u5C31\u597D", onReset && /*#__PURE__*/React.createElement("button", {
    className: "nf-meal__undo",
    onClick: onReset
  }, "\u64A4\u9500")) : /*#__PURE__*/React.createElement("div", {
    className: "nf-meal__footer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    fullWidth: true,
    onClick: onSkip
  }, "\u6CA1\u7167\u505A"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    fullWidth: true,
    leftIcon: /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 18,
      strokeWidth: 3,
      color: "#fff"
    }),
    onClick: onDone
  }, "\u7167\u505A\u4E86"))));
}
Object.assign(__ds_scope, { MealCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/app/MealCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/MetricRing.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLORS = {
  primary: "var(--color-primary)",
  accent: "var(--color-accent)",
  success: "var(--color-success)",
  info: "var(--color-info)",
  warning: "var(--color-warning)"
};

/**
 * MetricRing — circular progress dial for adherence / completion stats.
 * Renders centered content (a number + label) in the hole.
 */
function MetricRing({
  value = 0,
  max = 100,
  size = 96,
  thickness = 10,
  color = "primary",
  trackColor = "var(--ink-100)",
  label,
  valueText,
  children,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(1, value / max));
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const stroke = COLORS[color] || color;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      width: size,
      height: size,
      display: "inline-flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: trackColor,
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: stroke,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: c,
    strokeDashoffset: c * (1 - pct),
    style: {
      transition: "stroke-dashoffset 600ms cubic-bezier(0.22,1,0.36,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 1
    }
  }, children ?? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-number)",
      fontWeight: 800,
      fontSize: size * 0.27,
      lineHeight: 1,
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, valueText ?? `${Math.round(pct * 100)}%`), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: size * 0.12,
      color: "var(--text-secondary)"
    }
  }, label))));
}
Object.assign(__ds_scope, { MetricRing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/MetricRing.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-progress", `
  .nf-progress{ width:100%; }
  .nf-progress__track{ width:100%; background:var(--ink-100); border-radius:var(--radius-pill);
    overflow:hidden; }
  .nf-progress__fill{ height:100%; border-radius:var(--radius-pill);
    transition:width var(--dur-slow) var(--ease-out); }
  .nf-progress__head{ display:flex; justify-content:space-between; align-items:baseline;
    margin-bottom:8px; }
  .nf-progress__label{ font-family:var(--font-body); font-weight:var(--weight-semibold);
    font-size:13px; color:var(--text-secondary); }
  .nf-progress__val{ font-family:var(--font-number); font-weight:var(--weight-bold);
    font-size:13px; color:var(--text-primary); font-variant-numeric:tabular-nums; }
  `);
const COLORS = {
  primary: "var(--color-primary)",
  accent: "var(--color-accent)",
  success: "var(--color-success)",
  info: "var(--color-info)",
  warning: "var(--color-warning)"
};

/**
 * ProgressBar — horizontal fill for completion / adherence rates.
 */
function ProgressBar({
  value = 0,
  max = 100,
  color = "primary",
  height = 10,
  label,
  showValue = false,
  valueText,
  className = "",
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["nf-progress", className].filter(Boolean).join(" "),
    style: style
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    className: "nf-progress__head"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "nf-progress__label"
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    className: "nf-progress__val"
  }, valueText ?? `${Math.round(pct)}%`)), /*#__PURE__*/React.createElement("div", {
    className: "nf-progress__track",
    style: {
      height
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "nf-progress__fill",
    style: {
      width: `${pct}%`,
      background: COLORS[color] || color
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-tag", `
  .nf-tag{ display:inline-flex; align-items:center; gap:6px; font-family:var(--font-body);
    font-weight:var(--weight-semibold); font-size:14px; line-height:1; padding:9px 14px;
    border-radius:var(--radius-pill); cursor:default; background:var(--surface-card);
    color:var(--text-primary); box-shadow:inset 0 0 0 1.5px var(--border-default);
    -webkit-tap-highlight-color:transparent; transition:all var(--dur-fast) var(--ease-out); }
  .nf-tag--selectable{ cursor:pointer; }
  .nf-tag--selectable:active{ transform:scale(0.96); }
  .nf-tag--selectable:hover{ background:var(--ink-50); }
  .nf-tag--selected{ background:var(--color-primary-soft); color:var(--color-primary-press);
    box-shadow:inset 0 0 0 1.5px var(--color-primary); }
  .nf-tag--selected:hover{ background:var(--color-primary-soft); }
  `);

/**
 * Tag — a category / choice chip. Use `selectable` + `selected` for filters
 * and onboarding multi-select.
 */
function Tag({
  selectable = false,
  selected = false,
  leftIcon,
  className = "",
  children,
  ...rest
}) {
  const cls = ["nf-tag", selectable ? "nf-tag--selectable" : "", selected ? "nf-tag--selected" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    role: selectable ? "button" : undefined
  }, rest), leftIcon, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-checkbox", `
  .nf-check{ display:inline-flex; align-items:flex-start; gap:11px; cursor:pointer;
    -webkit-tap-highlight-color:transparent; }
  .nf-check__box{ width:24px; height:24px; border-radius:8px; flex:none; margin-top:1px;
    background:var(--surface-card); box-shadow:inset 0 0 0 2px var(--border-strong);
    display:flex; align-items:center; justify-content:center; color:#fff;
    transition:all var(--dur-fast) var(--ease-out); }
  .nf-check__box svg{ opacity:0; transform:scale(0.6); transition:all var(--dur-fast) var(--ease-spring); }
  .nf-check input{ position:absolute; opacity:0; width:0; height:0; }
  .nf-check input:checked + .nf-check__box{ background:var(--color-primary);
    box-shadow:inset 0 0 0 2px var(--color-primary); }
  .nf-check input:checked + .nf-check__box svg{ opacity:1; transform:scale(1); }
  .nf-check input:focus-visible + .nf-check__box{ box-shadow:inset 0 0 0 2px var(--color-primary), 0 0 0 4px var(--focus-ring); }
  .nf-check--round .nf-check__box{ border-radius:50%; }
  .nf-check__label{ font-family:var(--font-body); font-weight:var(--weight-medium);
    font-size:15px; line-height:1.5; color:var(--text-primary); }
  .nf-check--disabled{ opacity:.5; cursor:not-allowed; }
  `);

/**
 * Checkbox — square check with a slide-in tick. Used for the onboarding
 * health-disclaimer gate and multi-select lists.
 */
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  round = false,
  disabled = false,
  label,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["nf-check", round ? "nf-check--round" : "", disabled ? "nf-check--disabled" : "", className].filter(Boolean).join(" "),
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "nf-check__box"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 15,
    strokeWidth: 3,
    color: "#fff"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "nf-check__label"
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-input", `
  .nf-field{ display:flex; flex-direction:column; gap:7px; width:100%; }
  .nf-field__label{ font-family:var(--font-body); font-weight:var(--weight-semibold);
    font-size:13px; color:var(--text-secondary); padding-left:2px; }
  .nf-input{ display:flex; align-items:center; gap:10px; background:var(--surface-card);
    border-radius:var(--radius-md); padding:0 14px; height:52px;
    box-shadow:inset 0 0 0 1.5px var(--border-default);
    transition:box-shadow var(--dur-fast) ease, background var(--dur-fast) ease; }
  .nf-input:focus-within{ box-shadow:inset 0 0 0 2px var(--color-primary), 0 0 0 4px var(--focus-ring); }
  .nf-input--filled{ background:var(--ink-50); box-shadow:inset 0 0 0 1.5px transparent; }
  .nf-input--filled:focus-within{ background:var(--surface-card); }
  .nf-input--error{ box-shadow:inset 0 0 0 2px var(--color-danger); }
  .nf-input--error:focus-within{ box-shadow:inset 0 0 0 2px var(--color-danger), 0 0 0 4px var(--red-100); }
  .nf-input__icon{ color:var(--text-tertiary); display:flex; flex:none; }
  .nf-input input{ border:none; outline:none; background:transparent; flex:1; min-width:0;
    font-family:var(--font-body); font-weight:var(--weight-medium); font-size:16px;
    color:var(--text-primary); }
  .nf-input input::placeholder{ color:var(--text-tertiary); font-weight:var(--weight-medium); }
  .nf-input__suffix{ color:var(--text-tertiary); font-family:var(--font-body); font-weight:600;
    font-size:14px; flex:none; }
  .nf-input__btn{ border:none; background:transparent; color:var(--text-tertiary); cursor:pointer;
    display:flex; padding:4px; border-radius:8px; }
  .nf-input__btn:hover{ color:var(--text-secondary); }
  .nf-field__hint{ font-family:var(--font-body); font-size:12px; padding-left:2px;
    color:var(--text-tertiary); }
  .nf-field__hint--error{ color:var(--color-danger); font-weight:var(--weight-semibold); }
  `);

/**
 * Input — labelled text field with optional leading icon, suffix, and error.
 */
function Input({
  label,
  variant = "outline",
  leftIcon,
  rightSlot,
  suffix,
  error,
  hint,
  id,
  className = "",
  style,
  ...rest
}) {
  const wrapCls = ["nf-input", variant === "filled" ? "nf-input--filled" : "", error ? "nf-input--error" : ""].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("label", {
    className: ["nf-field", className].filter(Boolean).join(" "),
    style: style,
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "nf-field__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: wrapCls
  }, leftIcon && /*#__PURE__*/React.createElement("span", {
    className: "nf-input__icon"
  }, leftIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: id
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    className: "nf-input__suffix"
  }, suffix), rightSlot), (error || hint) && /*#__PURE__*/React.createElement("span", {
    className: ["nf-field__hint", error ? "nf-field__hint--error" : ""].filter(Boolean).join(" ")
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-radio", `
  .nf-radio{ display:inline-flex; align-items:center; gap:11px; cursor:pointer;
    -webkit-tap-highlight-color:transparent; }
  .nf-radio__dot{ width:24px; height:24px; border-radius:50%; flex:none; background:var(--surface-card);
    box-shadow:inset 0 0 0 2px var(--border-strong); display:flex; align-items:center; justify-content:center;
    transition:all var(--dur-fast) var(--ease-out); }
  .nf-radio__dot::after{ content:""; width:10px; height:10px; border-radius:50%; background:#fff;
    transform:scale(0); transition:transform var(--dur-fast) var(--ease-spring); }
  .nf-radio input{ position:absolute; opacity:0; width:0; height:0; }
  .nf-radio input:checked + .nf-radio__dot{ background:var(--color-primary); box-shadow:inset 0 0 0 2px var(--color-primary); }
  .nf-radio input:checked + .nf-radio__dot::after{ transform:scale(1); }
  .nf-radio input:focus-visible + .nf-radio__dot{ box-shadow:inset 0 0 0 2px var(--color-primary), 0 0 0 4px var(--focus-ring); }
  .nf-radio__label{ font-family:var(--font-body); font-weight:var(--weight-medium); font-size:15px; color:var(--text-primary); }
  `);

/**
 * Radio — single-select control (e.g. gender).
 */
function Radio({
  checked,
  defaultChecked,
  onChange,
  name,
  value,
  disabled,
  label,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["nf-radio", className].filter(Boolean).join(" "),
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    name: name,
    value: value,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "nf-radio__dot"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "nf-radio__label"
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-seg", `
  .nf-seg{ display:inline-flex; background:var(--ink-100); border-radius:var(--radius-md);
    padding:4px; gap:4px; width:100%; box-sizing:border-box; }
  .nf-seg__opt{ flex:1; border:none; background:transparent; cursor:pointer; border-radius:11px;
    font-family:var(--font-body); font-weight:var(--weight-semibold); font-size:15px;
    color:var(--text-secondary); padding:9px 12px; display:inline-flex; align-items:center;
    justify-content:center; gap:7px; -webkit-tap-highlight-color:transparent;
    transition:color var(--dur-fast) ease, background var(--dur-base) var(--ease-out), box-shadow var(--dur-base); }
  .nf-seg__opt--active{ background:var(--surface-card); color:var(--color-primary-press);
    box-shadow:var(--shadow-sm); }
  .nf-seg__opt:active:not(.nf-seg__opt--active){ color:var(--text-primary); }
  `);

/**
 * SegmentedControl — pick one of a few options (training scene, report range).
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["nf-seg", className].filter(Boolean).join(" "),
    style: style,
    role: "tablist"
  }, rest), options.map(opt => {
    const o = typeof opt === "string" ? {
      value: opt,
      label: opt
    } : opt;
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "tab",
      "aria-selected": active,
      className: ["nf-seg__opt", active ? "nf-seg__opt--active" : ""].filter(Boolean).join(" "),
      onClick: () => onChange && onChange(o.value)
    }, o.icon, o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-stepper", `
  .nf-stepper{ display:inline-flex; align-items:center; gap:14px; background:var(--ink-50);
    border-radius:var(--radius-md); padding:6px; }
  .nf-stepper__btn{ width:40px; height:40px; border-radius:11px; border:none; cursor:pointer;
    background:var(--surface-card); box-shadow:var(--shadow-xs); color:var(--color-primary-press);
    display:inline-flex; align-items:center; justify-content:center;
    transition:transform var(--dur-fast) var(--ease-out), background var(--dur-fast); -webkit-tap-highlight-color:transparent; }
  .nf-stepper__btn:hover:not(:disabled){ background:var(--color-primary-tint); }
  .nf-stepper__btn:active:not(:disabled){ transform:scale(0.9); }
  .nf-stepper__btn:disabled{ opacity:.35; cursor:not-allowed; }
  .nf-stepper__val{ font-family:var(--font-number); font-weight:var(--weight-bold); font-size:22px;
    min-width:54px; text-align:center; color:var(--text-primary); font-variant-numeric:tabular-nums; }
  .nf-stepper__unit{ font-family:var(--font-body); font-weight:600; font-size:14px;
    color:var(--text-tertiary); margin-left:-8px; }
  `);

/**
 * Stepper — numeric +/- control for onboarding values (age, etc).
 */
function Stepper({
  value = 0,
  min = -Infinity,
  max = Infinity,
  step = 1,
  unit,
  onChange,
  className = "",
  style,
  ...rest
}) {
  const set = v => {
    const clamped = Math.min(max, Math.max(min, v));
    onChange && onChange(clamped);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ["nf-stepper", className].filter(Boolean).join(" "),
    style: style
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nf-stepper__btn",
    onClick: () => set(value - step),
    disabled: value <= min,
    "aria-label": "\u51CF\u5C11"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 20,
    strokeWidth: 2.6
  })), /*#__PURE__*/React.createElement("span", {
    className: "nf-stepper__val"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "nf-stepper__unit"
  }, " ", unit)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "nf-stepper__btn",
    onClick: () => set(value + step),
    disabled: value >= max,
    "aria-label": "\u589E\u52A0"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 20,
    strokeWidth: 2.6
  })));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-switch", `
  .nf-switch{ position:relative; display:inline-flex; flex:none; cursor:pointer;
    -webkit-tap-highlight-color:transparent; }
  .nf-switch input{ position:absolute; opacity:0; width:0; height:0; }
  .nf-switch__track{ width:50px; height:30px; border-radius:var(--radius-pill); background:var(--ink-200);
    transition:background var(--dur-base) var(--ease-out); display:flex; align-items:center; padding:3px; }
  .nf-switch__thumb{ width:24px; height:24px; border-radius:50%; background:#fff; box-shadow:var(--shadow-sm);
    transition:transform var(--dur-base) var(--ease-spring); }
  .nf-switch input:checked + .nf-switch__track{ background:var(--color-primary); }
  .nf-switch input:checked + .nf-switch__track .nf-switch__thumb{ transform:translateX(20px); }
  .nf-switch input:focus-visible + .nf-switch__track{ box-shadow:0 0 0 4px var(--focus-ring); }
  .nf-switch--disabled{ opacity:.5; cursor:not-allowed; }
  `);

/**
 * Switch — iOS-style on/off toggle for settings & reminders.
 */
function Switch({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["nf-switch", disabled ? "nf-switch--disabled" : "", className].filter(Boolean).join(" "),
    style: style
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "nf-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "nf-switch__thumb"
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-appbar", `
  .nf-appbar{ display:flex; align-items:center; gap:10px; min-height:var(--appbar-h);
    padding:6px 8px; box-sizing:border-box; }
  .nf-appbar__side{ display:flex; align-items:center; gap:4px; flex:none; min-width:42px; }
  .nf-appbar__side--right{ justify-content:flex-end; }
  .nf-appbar__center{ flex:1; min-width:0; text-align:center; }
  .nf-appbar__title{ font-family:var(--font-display); font-weight:var(--weight-bold); font-size:17px;
    color:var(--text-primary); line-height:1.2; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .nf-appbar__sub{ font-family:var(--font-body); font-weight:var(--weight-medium); font-size:12px;
    color:var(--text-tertiary); margin-top:1px; }
  .nf-appbar--left .nf-appbar__center{ text-align:left; }
  .nf-appbar--left .nf-appbar__title{ font-size:20px; }
  `);

/**
 * AppBar — the iOS-style top navigation bar. Centered title by default, or
 * left-aligned for primary screens.
 */
function AppBar({
  title,
  subtitle,
  leading,
  actions,
  align = "center",
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    className: ["nf-appbar", align === "left" ? "nf-appbar--left" : "", className].filter(Boolean).join(" "),
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "nf-appbar__side"
  }, leading), /*#__PURE__*/React.createElement("div", {
    className: "nf-appbar__center"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "nf-appbar__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "nf-appbar__sub"
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    className: "nf-appbar__side nf-appbar__side--right"
  }, actions));
}
Object.assign(__ds_scope, { AppBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
__ds_scope.injectCss("nf-bottomnav", `
  .nf-bottomnav{ display:flex; align-items:stretch; background:var(--surface-card);
    border-top:1px solid var(--border-subtle); padding:6px 8px calc(6px + var(--safe-bottom));
    box-sizing:border-box; }
  .nf-bottomnav__item{ flex:1; border:none; background:transparent; cursor:pointer;
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px;
    padding:6px 2px; color:var(--text-tertiary); -webkit-tap-highlight-color:transparent;
    transition:color var(--dur-fast); }
  .nf-bottomnav__item--active{ color:var(--color-primary); }
  .nf-bottomnav__lbl{ font-family:var(--font-body); font-weight:var(--weight-semibold); font-size:11px; }
  .nf-bottomnav__ico{ position:relative; display:flex; }
  .nf-bottomnav__dot{ position:absolute; top:-1px; right:-3px; width:7px; height:7px; border-radius:50%;
    background:var(--color-accent); box-shadow:0 0 0 2px var(--surface-card); }
  `);

/**
 * BottomNav — the app's primary tab bar.
 */
function BottomNav({
  items = [],
  value,
  onChange,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ["nf-bottomnav", className].filter(Boolean).join(" "),
    style: style
  }, rest), items.map(it => {
    const active = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      className: ["nf-bottomnav__item", active ? "nf-bottomnav__item--active" : ""].filter(Boolean).join(" "),
      onClick: () => onChange && onChange(it.value),
      "aria-current": active ? "page" : undefined
    }, /*#__PURE__*/React.createElement("span", {
      className: "nf-bottomnav__ico"
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 24,
      strokeWidth: active ? 2.4 : 2,
      fill: active ? "currentColor" : "none",
      color: active ? "var(--color-primary-soft)" : "currentColor"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 24,
      strokeWidth: active ? 2.4 : 2
    })), it.dot && /*#__PURE__*/React.createElement("span", {
      className: "nf-bottomnav__dot"
    })), /*#__PURE__*/React.createElement("span", {
      className: "nf-bottomnav__lbl"
    }, it.label));
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/EveningReviewScreen.jsx
try { (() => {
/* nofat — Evening review (晚间点评). Reads like a message from your coach. */
(function () {
  const {
    AppBar,
    IconButton,
    Icon,
    Avatar,
    CoachBubble,
    Card,
    Badge,
    Button
  } = window.NofatDesignSystem_2c47dc;
  function DayChips({
    mealsDone,
    trainingDone
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 51,
        display: "flex",
        gap: 8,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "none",
      style: {
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "utensils",
      size: 16,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "\u4E09\u9910"), /*#__PURE__*/React.createElement("span", {
      className: "nf-tnum",
      style: {
        fontFamily: "var(--font-number)",
        fontWeight: 800,
        fontSize: 15,
        color: "var(--text-primary)"
      }
    }, mealsDone, "/3")), /*#__PURE__*/React.createElement(Card, {
      variant: "flat",
      padding: "none",
      style: {
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dumbbell",
      size: 16,
      color: "var(--coral-500)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "\u8BAD\u7EC3"), /*#__PURE__*/React.createElement(Badge, {
      variant: trainingDone ? "success" : "neutral"
    }, trainingDone ? "完成" : "未练")));
  }
  function EveningReviewScreen({
    mealStatus,
    trainingDone
  }) {
    const mealsDone = ["breakfast", "lunch", "dinner"].filter(m => mealStatus[m] === "done").length;
    return /*#__PURE__*/React.createElement(window.Screen, {
      style: {
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-canvas-warm)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8px",
        background: "var(--bg-canvas-warm)"
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      leading: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u8FD4\u56DE"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-left"
      })),
      actions: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u66F4\u591A"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal"
      })),
      title: /*#__PURE__*/React.createElement("span", {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 9
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        coach: true,
        size: 30,
        online: true
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.1,
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: 16
        }
      }, "\u8BFA\u6559\u7EC3"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          fontSize: 11,
          color: "var(--color-primary)"
        }
      }, "\u5728\u7EBF \xB7 \u79C1\u6559")))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        padding: "8px 20px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        margin: "4px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 12,
        color: "var(--text-tertiary)",
        background: "var(--ink-100)",
        padding: "5px 12px",
        borderRadius: "var(--radius-pill)"
      }
    }, "\u4ECA\u665A \xB7 21:30")), /*#__PURE__*/React.createElement(CoachBubble, {
      time: "\u665A 21:30"
    }, "\u4ECA\u5929\u6211\u770B\u4E86\u4E00\u773C\uFF0C", /*#__PURE__*/React.createElement("strong", null, "\u4E09\u9910\u7167\u505A\u4E86 ", mealsDone, " \u987F"), trainingDone ? "，训练也练完了" : "", "\u3002\u8FD9\u79CD\u8282\u594F\uFF0C\u633A\u7A33\u7684\u3002"), /*#__PURE__*/React.createElement(DayChips, {
      mealsDone: mealsDone,
      trainingDone: trainingDone
    }), /*#__PURE__*/React.createElement(CoachBubble, {
      showAvatar: false,
      name: null,
      style: {
        marginLeft: 51
      }
    }, "\u665A\u9910\u90A3\u6761\u9F99\u5229\u9C7C\u4F60\u7167\u505A\u4E86\uFF0C\u86CB\u767D\u8D28\u591F\u3001\u6CB9\u4E5F\u63A7\u4F4F\u4E86 \uD83D\uDC4D \u8FD9\u5C31\u662F\u51CF\u8102\u671F\u6700\u8BE5\u5403\u7684\u90A3\u79CD\u996D\u2014\u2014", /*#__PURE__*/React.createElement("strong", null, "\u5403\u5F97\u9971\uFF0C\u53C8\u4E0D\u56E4"), "\u3002"), /*#__PURE__*/React.createElement(CoachBubble, {
      showAvatar: false,
      name: null,
      style: {
        marginLeft: 51
      }
    }, "\u6709\u4EF6\u5C0F\u4E8B\u63D0\u9192\u4F60\uFF1A\u4ECA\u5929\u6C34\u559D\u5F97\u6709\u70B9\u5C11\u3002\u660E\u5929\u6211\u628A\u7B2C\u4E00\u676F\u6C34\u7684\u63D0\u9192\u5F80\u524D\u632A\u534A\u5C0F\u65F6\uFF0C\u54B1\u4EEC\u987A\u624B\u5C31\u559D\u4E86\u3002"), /*#__PURE__*/React.createElement(CoachBubble, {
      showAvatar: false,
      name: null,
      tone: "warm",
      style: {
        marginLeft: 51
      }
    }, "\u522B\u76EF\u7740\u79E4\uFF0C\u76EF\u7740\u4E60\u60EF\u3002\u4F60\u5DF2\u7ECF\u8FDE\u7EED 12 \u5929\u8DDF\u4E0B\u6765\u4E86\uFF0C\u8EAB\u4F53\u5728\u6084\u6084\u53D8\u597D\u3002\u660E\u5929\u89C1\uFF0C\u65E9\u70B9\u7761 \uD83C\uDF19")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        padding: "10px 16px calc(14px + var(--safe-bottom))",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        marginBottom: 10,
        overflowX: "auto"
      }
    }, ["收到 👍", "明天加油", "水我会喝的"].map(t => /*#__PURE__*/React.createElement("span", {
      key: t,
      style: {
        flex: "none",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--color-primary-press)",
        background: "var(--color-primary-tint)",
        padding: "8px 14px",
        borderRadius: "var(--radius-pill)",
        cursor: "pointer"
      }
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "var(--ink-50)",
        borderRadius: "var(--radius-pill)",
        padding: "6px 6px 6px 18px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontFamily: "var(--font-body)",
        fontSize: 15,
        color: "var(--text-tertiary)"
      }
    }, "\u56DE\u70B9\u4EC0\u4E48\u2026"), /*#__PURE__*/React.createElement(IconButton, {
      variant: "solid",
      "aria-label": "\u53D1\u9001"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 18,
      color: "#fff"
    })))));
  }
  window.EveningReviewScreen = EveningReviewScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/EveningReviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/ExerciseDetailScreen.jsx
try { (() => {
/* nofat — Exercise detail (动作详情). One diagram + 3 cues + 1 common mistake. */
(function () {
  const {
    AppBar,
    IconButton,
    Icon,
    Card,
    Badge,
    Button,
    MediaPlaceholder
  } = window.NofatDesignSystem_2c47dc;
  function ExerciseDetailScreen({
    ex,
    checked,
    onToggle,
    onBack
  }) {
    return /*#__PURE__*/React.createElement(window.Screen, {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      title: "\u52A8\u4F5C\u8BE6\u60C5",
      leading: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u8FD4\u56DE",
        onClick: onBack
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-left"
      })),
      actions: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u6536\u85CF"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "heart"
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "6px 20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(MediaPlaceholder, {
      tone: "exercise",
      height: 210,
      radius: 20,
      icon: "dumbbell",
      label: "\u52A8\u4F5C\u56FE\u89E3 / \u89C6\u9891"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 24,
        color: "var(--text-primary)",
        margin: 0
      }
    }, ex.name), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "primary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "repeat",
        size: 12
      })
    }, ex.detail), /*#__PURE__*/React.createElement(Badge, {
      variant: "neutral",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "timer",
        size: 12
      })
    }, "\u4F11\u606F ", ex.rest, "s"), ex.muscles.map((m, i) => /*#__PURE__*/React.createElement(Badge, {
      key: i,
      variant: "accent"
    }, m)))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 18,
      color: "var(--color-primary)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 16,
        color: "var(--text-primary)"
      }
    }, "\u52A8\u4F5C\u8981\u70B9")), /*#__PURE__*/React.createElement("ol", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        counterReset: "cue"
      }
    }, ex.points.map((p, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "var(--color-primary-soft)",
        color: "var(--color-primary-press)",
        fontFamily: "var(--font-number)",
        fontWeight: 700,
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 15,
        lineHeight: 1.55,
        color: "var(--text-primary)",
        textWrap: "pretty"
      }
    }, p))))), /*#__PURE__*/React.createElement(Card, {
      variant: "warm",
      padding: "lg",
      style: {
        display: "flex",
        gap: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        color: "var(--coral-600)",
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle",
      size: 20
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 15,
        color: "var(--coral-700)"
      }
    }, "\u6700\u5E38\u89C1\u9519\u8BEF"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: 1.6,
        color: "var(--coral-700)",
        margin: "5px 0 0",
        opacity: 0.92,
        textWrap: "pretty"
      }
    }, ex.mistake)))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 20px calc(20px + var(--safe-bottom))",
        flex: "none",
        background: "linear-gradient(to top, var(--bg-canvas) 72%, transparent)",
        position: "sticky",
        bottom: 0
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: checked ? "secondary" : "primary",
      size: "lg",
      fullWidth: true,
      onClick: onToggle,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: checked ? "check-circle" : "check",
        size: 18,
        strokeWidth: checked ? 2 : 3,
        color: checked ? "var(--color-primary-press)" : "#fff"
      })
    }, checked ? "已完成 · 点击取消" : "标记完成")));
  }
  window.ExerciseDetailScreen = ExerciseDetailScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/ExerciseDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/LoginScreen.jsx
try { (() => {
/* nofat — Login / Register screen */
(function () {
  const {
    Logo,
    Input,
    Button,
    IconButton,
    Icon,
    SegmentedControl
  } = window.NofatDesignSystem_2c47dc;
  const {
    useState
  } = React;
  function LoginScreen({
    onSubmit
  }) {
    const [mode, setMode] = useState("login");
    const [pw, setPw] = useState(false);
    return /*#__PURE__*/React.createElement(window.Screen, {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        padding: "30px 28px 8px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -90,
        right: -70,
        width: 230,
        height: 230,
        borderRadius: "50%",
        border: "44px solid var(--green-100)",
        opacity: 0.7
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 30,
        right: 36,
        width: 64,
        height: 64,
        borderRadius: "50%",
        background: "var(--color-accent-soft)",
        opacity: 0.8
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      variant: "mark",
      size: 56
    }), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 800,
        fontSize: 34,
        lineHeight: 1.18,
        letterSpacing: "-0.03em",
        color: "var(--text-primary)",
        margin: "26px 0 0"
      }
    }, "\u4F60\u7684 AI", /*#__PURE__*/React.createElement("br", null), "\u51CF\u8102", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-primary)"
      }
    }, "\u6559\u7EC3")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 16,
        lineHeight: 1.55,
        color: "var(--text-secondary)",
        margin: "12px 0 0",
        maxWidth: 280,
        textWrap: "pretty"
      }
    }, "\u6BCF\u5929\u544A\u8BC9\u4F60\u5403\u4EC0\u4E48\u3001\u7EC3\u4EC0\u4E48\u3002\u4E0D\u6328\u997F\uFF0C\u8DDF\u7740\u8BFA\u6559\u7EC3\u4E00\u6B65\u6B65\u6765\u3002"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "22px 28px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: mode,
      onChange: setMode,
      options: [{
        value: "login",
        label: "登录"
      }, {
        value: "register",
        label: "注册"
      }]
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u90AE\u7BB1",
      type: "email",
      placeholder: "you@example.com",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 18,
        color: "var(--text-tertiary)"
      }),
      defaultValue: "me@nofat.app"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "\u5BC6\u7801",
      type: pw ? "text" : "password",
      placeholder: "\u81F3\u5C11 8 \u4F4D",
      defaultValue: "getfit2026",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "lock",
        size: 18,
        color: "var(--text-tertiary)"
      }),
      rightSlot: /*#__PURE__*/React.createElement("button", {
        className: "nf-input__btn",
        "aria-label": "\u663E\u793A\u5BC6\u7801",
        onClick: () => setPw(p => !p)
      }, /*#__PURE__*/React.createElement(Icon, {
        name: pw ? "eye-off" : "eye",
        size: 18
      }))
    }), mode === "login" && /*#__PURE__*/React.createElement("button", {
      style: {
        alignSelf: "flex-end",
        border: "none",
        background: "none",
        cursor: "pointer",
        marginTop: -6,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-link)"
      }
    }, "\u5FD8\u8BB0\u5BC6\u7801\uFF1F"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      onClick: onSubmit,
      rightIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18,
        color: "#fff"
      })
    }, mode === "login" ? "开始今天" : "创建账号"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: "2px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--text-tertiary)",
        fontWeight: 600
      }
    }, "\u6216"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--border-subtle)"
      }
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      fullWidth: true,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "apple",
        size: 18,
        fill: "var(--text-primary)",
        color: "var(--text-primary)"
      })
    }, "\u4F7F\u7528 Apple \u7EE7\u7EED"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: 12,
        lineHeight: 1.6,
        color: "var(--text-tertiary)",
        textAlign: "center",
        margin: "8px 4px 0"
      }
    }, "\u7EE7\u7EED\u5373\u4EE3\u8868\u540C\u610F ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-link)",
        fontWeight: 600
      }
    }, "\u670D\u52A1\u6761\u6B3E"), " \u4E0E ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-link)",
        fontWeight: 600
      }
    }, "\u9690\u79C1\u653F\u7B56"))));
  }
  window.LoginScreen = LoginScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/OnboardingScreen.jsx
try { (() => {
/* nofat — Onboarding questionnaire with health disclaimer gate */
(function () {
  const {
    Card,
    Input,
    Button,
    IconButton,
    Icon,
    Radio,
    Tag,
    Checkbox,
    Stepper,
    SegmentedControl
  } = window.NofatDesignSystem_2c47dc;
  const {
    useState
  } = React;
  function Field({
    label,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 14,
        color: "var(--text-primary)"
      }
    }, label), children);
  }
  function OnboardingScreen({
    onBack,
    onSubmit
  }) {
    const [agree, setAgree] = useState(false);
    const [sex, setSex] = useState("f");
    const [scene, setScene] = useState("home");
    const [diet, setDiet] = useState("eatout");
    const [age, setAge] = useState(28);
    return /*#__PURE__*/React.createElement(window.Screen, {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 8px 0"
      }
    }, /*#__PURE__*/React.createElement(window.NofatDesignSystem_2c47dc.AppBar, {
      align: "left",
      title: "\u5EFA\u7ACB\u4F60\u7684\u65B9\u6848",
      subtitle: "2 \u5206\u949F\uFF0C\u6559\u7EC3\u5C31\u61C2\u4F60",
      leading: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u8FD4\u56DE",
        onClick: onBack
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-left"
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 22px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "warm",
      padding: "lg",
      style: {
        display: "flex",
        gap: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        color: "var(--coral-600)",
        marginTop: 1
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "alert-triangle",
      size: 22
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 16,
        color: "var(--coral-700)"
      }
    }, "\u5065\u5EB7\u514D\u8D23\u58F0\u660E"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 13.5,
        lineHeight: 1.6,
        color: "var(--coral-700)",
        margin: "6px 0 14px",
        opacity: 0.92,
        textWrap: "pretty"
      }
    }, "nofat \u63D0\u4F9B\u7684\u996E\u98DF\u4E0E\u8BAD\u7EC3\u5EFA\u8BAE\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E0D\u6784\u6210\u533B\u7597\u610F\u89C1\u3002\u5982\u6709\u6162\u6027\u75C5\u3001\u5B55\u671F\u6216\u8EAB\u4F53\u4E0D\u9002\uFF0C\u8BF7\u5148\u54A8\u8BE2\u533B\u751F\u3002"), /*#__PURE__*/React.createElement(Checkbox, {
      label: "\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F",
      checked: agree,
      onChange: e => setAgree(e.target.checked)
    }))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "\u8EAB\u9AD8"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "number",
      suffix: "cm",
      variant: "filled",
      defaultValue: "168"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u4F53\u91CD"
    }, /*#__PURE__*/React.createElement(Input, {
      type: "number",
      suffix: "kg",
      variant: "filled",
      defaultValue: "64"
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "\u5E74\u9F84"
    }, /*#__PURE__*/React.createElement(Stepper, {
      value: age,
      min: 14,
      max: 90,
      unit: "\u5C81",
      onChange: setAge
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u6027\u522B"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 22
      }
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "sex",
      value: "f",
      label: "\u5973",
      checked: sex === "f",
      onChange: () => setSex("f")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "sex",
      value: "m",
      label: "\u7537",
      checked: sex === "m",
      onChange: () => setSex("m")
    })))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "\u8BAD\u7EC3\u573A\u666F"
    }, /*#__PURE__*/React.createElement(SegmentedControl, {
      value: scene,
      onChange: setScene,
      options: [{
        value: "gym",
        label: "健身房",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "dumbbell",
          size: 16
        })
      }, {
        value: "home",
        label: "居家",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "home",
          size: 16
        })
      }]
    })), /*#__PURE__*/React.createElement(Field, {
      label: "\u996E\u98DF\u573A\u666F"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 9
      }
    }, [["eatout", "外食为主"], ["cook", "自己做饭"], ["mix", "两者都有"]].map(([v, l]) => /*#__PURE__*/React.createElement(Tag, {
      key: v,
      selectable: true,
      selected: diet === v,
      onClick: () => setDiet(v)
    }, l)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 22px calc(20px + var(--safe-bottom))",
        flex: "none",
        background: "linear-gradient(to top, var(--bg-canvas) 70%, transparent)",
        position: "sticky",
        bottom: 0
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "lg",
      fullWidth: true,
      disabled: !agree,
      onClick: onSubmit,
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        size: 18,
        color: "#fff"
      })
    }, "\u751F\u6210\u4ECA\u65E5\u5904\u65B9"), !agree && /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: "center",
        fontSize: 12,
        color: "var(--text-tertiary)",
        margin: "8px 0 0",
        fontWeight: 600
      }
    }, "\u8BF7\u5148\u52FE\u9009\u5065\u5EB7\u514D\u8D23\u58F0\u660E")));
  }
  window.OnboardingScreen = OnboardingScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/OnboardingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/TodayScreen.jsx
try { (() => {
/* nofat — Today's Prescription (今日处方) · the core screen. NO weight numbers. */
(function () {
  const {
    AppBar,
    IconButton,
    Icon,
    Card,
    CoachBubble,
    MealCard,
    Badge,
    MediaPlaceholder,
    Button
  } = window.NofatDesignSystem_2c47dc;
  function EnergyCard({
    kcal
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      variant: "tint",
      padding: "lg",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "leaf",
      size: 26,
      color: "var(--color-primary)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 13,
        color: "var(--color-primary-press)"
      }
    }, "\u4ECA\u65E5\u914D\u9910 \xB7 \u7BA1\u9971\u4E0D\u6328\u997F"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        marginTop: 3
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "nf-tnum",
      style: {
        fontFamily: "var(--font-number)",
        fontWeight: 800,
        fontSize: 30,
        color: "var(--text-primary)",
        lineHeight: 1
      }
    }, kcal), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "kcal \xB7 \u628A\u5B83\u5403\u6EE1"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "primary"
    }, "\u86CB\u767D 120g")));
  }
  function TrainingCard({
    plan,
    done,
    onOpen
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      interactive: true,
      onClick: onOpen,
      padding: "none",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "16px 16px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 34,
        height: 34,
        borderRadius: 11,
        background: "var(--color-accent-soft)",
        color: "var(--coral-700)",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "dumbbell",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 17,
        color: "var(--text-primary)"
      }
    }, plan.title)), done ? /*#__PURE__*/React.createElement(Badge, {
      variant: "success",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 12,
        strokeWidth: 3
      })
    }, "\u5DF2\u5B8C\u6210") : /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      color: "var(--text-tertiary)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 16,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "home",
      size: 15,
      color: "var(--text-tertiary)"
    }), "\u5C45\u5BB6"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "repeat",
      size: 15,
      color: "var(--text-tertiary)"
    }), plan.exercises.length, " \u4E2A\u52A8\u4F5C"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 15,
      color: "var(--text-tertiary)"
    }), "\u7EA6 ", plan.minutes, " \u5206\u949F")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, plan.exercises.slice(0, 4).map((e, i) => /*#__PURE__*/React.createElement(MediaPlaceholder, {
      key: i,
      tone: "exercise",
      width: 62,
      height: 62,
      radius: 13,
      icon: "dumbbell"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 62,
        height: 62,
        borderRadius: 13,
        background: "var(--ink-100)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-number)",
        fontWeight: 700,
        color: "var(--text-secondary)",
        fontSize: 14
      }
    }, "+", plan.exercises.length - 4))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--border-subtle)",
        padding: "13px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 14,
        color: done ? "var(--text-secondary)" : "var(--color-primary-press)"
      }
    }, done ? "今天练过了，棒" : "开始训练"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: done ? "var(--green-100)" : "var(--color-primary)",
        color: done ? "var(--green-700)" : "#fff"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: done ? "check" : "play",
      size: 16,
      strokeWidth: done ? 3 : 2,
      fill: done ? "none" : "#fff"
    }))));
  }
  function SectionLabel({
    children,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "4px 2px 0"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 18,
        color: "var(--text-primary)"
      }
    }, children), right);
  }
  function TodayScreen({
    data,
    mealStatus,
    setMeal,
    trainingDone,
    onOpenTraining
  }) {
    const meals = data.meals;
    const totalKcal = meals.reduce((s, m) => s + m.calories, 0);
    return /*#__PURE__*/React.createElement(window.Screen, null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      align: "left",
      title: "\u4ECA\u65E5\u5904\u65B9",
      subtitle: "6 \u6708 15 \u65E5 \xB7 \u5468\u65E5",
      actions: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u63D0\u9192"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "bell"
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "6px 20px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(CoachBubble, {
      tone: "tint",
      time: "\u65E9 7:00"
    }, "\u65E9\u5440 \u2600\uFE0F \u4ECA\u5929\u7ED9\u4F60\u914D\u4E86\u987F", /*#__PURE__*/React.createElement("strong", null, "\u5403\u5F97\u9971"), "\u7684\u4E09\u9910\uFF0C\u86CB\u767D\u8D28\u62C9\u6EE1\u3002\u5148\u628A\u65E9\u9910\u89E3\u51B3\uFF0C\u54B1\u4EEC\u6162\u6162\u6765\u3002"), /*#__PURE__*/React.createElement(EnergyCard, {
      kcal: totalKcal
    }), /*#__PURE__*/React.createElement(SectionLabel, null, "\u4E09\u9910"), meals.map(m => /*#__PURE__*/React.createElement(MealCard, {
      key: m.meal,
      meal: m.meal,
      time: m.time,
      calories: m.calories,
      name: m.name,
      portion: m.portion,
      tags: m.tags,
      orderTip: m.orderTip,
      recipeSteps: m.recipeSteps,
      status: mealStatus[m.meal],
      onDone: () => setMeal(m.meal, "done"),
      onSkip: () => setMeal(m.meal, "skipped"),
      onReset: () => setMeal(m.meal, null)
    })), /*#__PURE__*/React.createElement(SectionLabel, null, "\u4ECA\u65E5\u8BAD\u7EC3"), /*#__PURE__*/React.createElement(TrainingCard, {
      plan: data.training,
      done: trainingDone,
      onOpen: onOpenTraining
    })));
  }
  window.TodayScreen = TodayScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/TodayScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/TrainingScreen.jsx
try { (() => {
/* nofat — Training execution (训练执行). Check off each move; tap to see detail. */
(function () {
  const {
    AppBar,
    IconButton,
    Icon,
    Card,
    ExerciseRow,
    Button,
    ProgressBar,
    MetricRing
  } = window.NofatDesignSystem_2c47dc;
  function TrainingScreen({
    plan,
    doneList,
    onToggle,
    onOpenExercise,
    onBack,
    onFinish
  }) {
    const total = plan.exercises.length;
    const completed = doneList.filter(Boolean).length;
    const allDone = completed === total;
    return /*#__PURE__*/React.createElement(window.Screen, {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      title: plan.title,
      subtitle: "\u5C45\u5BB6 \xB7 \u5168\u8EAB",
      leading: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u8FD4\u56DE",
        onClick: onBack
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "chevron-left"
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "6px 20px 20px"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      variant: "tint",
      padding: "lg",
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(MetricRing, {
      value: completed,
      max: total,
      valueText: `${completed}/${total}`,
      label: "\u52A8\u4F5C",
      color: "primary",
      size: 84
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 17,
        color: "var(--text-primary)"
      }
    }, allDone ? "全部完成，漂亮！" : completed === 0 ? "热身好就开始吧" : "保持节奏，别急"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 13.5,
        color: "var(--text-secondary)",
        marginTop: 4,
        textWrap: "pretty"
      }
    }, allDone ? "记得拉伸放松，喝点水。" : "每个动作做完点一下右边的圈，点名字看详情。")))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderRadius: "var(--radius-card)",
        boxShadow: "var(--shadow-card)",
        padding: "6px 8px"
      }
    }, plan.exercises.map((ex, i) => /*#__PURE__*/React.createElement(ExerciseRow, {
      key: i,
      index: i + 1,
      name: ex.name,
      detail: ex.detail,
      rest: ex.rest,
      mode: "check",
      checked: doneList[i],
      onToggle: () => onToggle(i),
      onOpen: () => onOpenExercise(i)
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 20px calc(20px + var(--safe-bottom))",
        flex: "none",
        background: "linear-gradient(to top, var(--bg-canvas) 72%, transparent)",
        position: "sticky",
        bottom: 0
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: allDone ? "primary" : "secondary",
      size: "lg",
      fullWidth: true,
      onClick: onFinish,
      leftIcon: allDone ? /*#__PURE__*/React.createElement(Icon, {
        name: "trophy",
        size: 18,
        color: "#fff"
      }) : null
    }, allDone ? "完成训练" : `还差 ${total - completed} 个 · 先收工`)));
  }
  window.TrainingScreen = TrainingScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/TrainingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/WeeklyReportScreen.jsx
try { (() => {
/* nofat — Weekly report (周报). The ONLY place weight shows — as a 7-day trend. */
(function () {
  const {
    AppBar,
    IconButton,
    Icon,
    Card,
    Badge,
    MetricRing,
    Avatar,
    SegmentedControl,
    ProgressBar
  } = window.NofatDesignSystem_2c47dc;
  const {
    useState
  } = React;
  function TrendChart({
    values
  }) {
    const W = 320,
      H = 150,
      padX = 14,
      padTop = 22,
      padBot = 30;
    const min = Math.min(...values),
      max = Math.max(...values);
    const range = max - min || 1;
    const span = W - padX * 2;
    const innerH = H - padTop - padBot;
    const pts = values.map((v, i) => {
      const x = padX + span * i / (values.length - 1);
      const y = padTop + innerH * (1 - (v - min) / range);
      return [x, y];
    });
    const line = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
    const area = `${line} L${pts[pts.length - 1][0].toFixed(1)} ${H - padBot} L${pts[0][0].toFixed(1)} ${H - padBot} Z`;
    const days = ["一", "二", "三", "四", "五", "六", "日"];
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${W} ${H}`,
      style: {
        width: "100%",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "nf-area",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0",
      stopColor: "var(--color-primary)",
      stopOpacity: "0.22"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "1",
      stopColor: "var(--color-primary)",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: "url(#nf-area)"
    }), /*#__PURE__*/React.createElement("path", {
      d: line,
      fill: "none",
      stroke: "var(--color-primary)",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), pts.map((p, i) => {
      const last = i === pts.length - 1;
      return /*#__PURE__*/React.createElement("g", {
        key: i
      }, /*#__PURE__*/React.createElement("circle", {
        cx: p[0],
        cy: p[1],
        r: last ? 6 : 3.5,
        fill: last ? "var(--color-primary)" : "var(--surface-card)",
        stroke: "var(--color-primary)",
        strokeWidth: last ? 0 : 2.5
      }), last && /*#__PURE__*/React.createElement("circle", {
        cx: p[0],
        cy: p[1],
        r: "11",
        fill: "var(--color-primary)",
        opacity: "0.16"
      }), /*#__PURE__*/React.createElement("text", {
        x: p[0],
        y: H - 10,
        textAnchor: "middle",
        fontSize: "11",
        fontWeight: "600",
        fill: "var(--text-tertiary)",
        fontFamily: "var(--font-body)"
      }, days[i]));
    }));
  }
  function WeeklyReportScreen() {
    const [range, setRange] = useState("w");
    const weights = [64.6, 64.5, 64.7, 64.3, 64.2, 64.0, 63.9];
    const delta = (weights[weights.length - 1] - weights[0]).toFixed(1);
    return /*#__PURE__*/React.createElement(window.Screen, null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 8px"
      }
    }, /*#__PURE__*/React.createElement(AppBar, {
      align: "left",
      title: "\u5468\u62A5",
      subtitle: "6 \u6708 9 \u65E5 \u2013 6 \u6708 15 \u65E5",
      actions: /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        "aria-label": "\u5206\u4EAB"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "more-horizontal"
      }))
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "6px 20px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 17,
        color: "var(--text-primary)"
      }
    }, "\u4F53\u91CD\u8D8B\u52BF"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 13,
        color: "var(--text-secondary)",
        marginTop: 3
      }
    }, "\u7A33\u7A33\u5411\u4E0B\uFF0C\u5C31\u662F\u597D\u8282\u594F")), /*#__PURE__*/React.createElement(Badge, {
      variant: "success",
      size: "lg",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "trending-down",
        size: 14
      })
    }, delta, " kg")), /*#__PURE__*/React.createElement(TrendChart, {
      values: weights
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(MetricRing, {
      value: 19,
      max: 21,
      valueText: "19/21",
      label: "\u9910\u6B21",
      color: "primary",
      size: 92
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "\u4E09\u9910\u8FBE\u6210")), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(MetricRing, {
      value: 5,
      max: 6,
      valueText: "5/6",
      label: "\u8BAD\u7EC3",
      color: "accent",
      size: 92
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "\u8BAD\u7EC3\u8FBE\u6210"))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 14,
        color: "var(--text-primary)"
      }
    }, "\u6BCF\u65E5\u9910\u6B21"), /*#__PURE__*/React.createElement(Badge, {
      variant: "primary",
      leftIcon: /*#__PURE__*/React.createElement(Icon, {
        name: "flame",
        size: 12,
        fill: "var(--color-primary-press)"
      })
    }, "\u8FDE\u7EED 12 \u5929")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 7,
        alignItems: "flex-end",
        height: 56
      }
    }, [3, 3, 2, 3, 3, 2, 3].map((n, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 4,
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: `${n / 3 * 100}%`,
        background: n === 3 ? "var(--color-primary)" : "var(--green-300)",
        borderRadius: 6
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between"
      }
    }, ["一", "二", "三", "四", "五", "六", "日"].map(d => /*#__PURE__*/React.createElement("span", {
      key: d,
      style: {
        flex: 1,
        textAlign: "center",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 11,
        color: "var(--text-tertiary)"
      }
    }, d)))), /*#__PURE__*/React.createElement(Card, {
      variant: "tint",
      padding: "lg",
      style: {
        display: "flex",
        gap: 13
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      coach: true,
      size: 42
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 15,
        color: "var(--color-primary-press)",
        marginBottom: 6
      }
    }, "\u8BFA\u6559\u7EC3\u7684\u5468\u603B\u7ED3"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 500,
        fontSize: 14.5,
        lineHeight: 1.65,
        color: "var(--text-primary)",
        margin: 0,
        textWrap: "pretty"
      }
    }, "\u8FD9\u5468\u4F60\u505A\u5F97\u5F88\u624E\u5B9E\u2014\u2014\u4E09\u9910\u51E0\u4E4E\u987F\u987F\u7167\u505A\uFF0C\u8BAD\u7EC3\u4E5F\u53EA\u5DEE\u4E00\u6B21\u3002\u4F53\u91CD", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--color-primary-press)",
        fontWeight: 700
      }
    }, "\u7A33\u7A33\u5F80\u4E0B\u8D70"), "\uFF0C\u8FD9\u6B63\u662F\u6211\u4EEC\u60F3\u8981\u7684\uFF1A\u4E0D\u9760\u997F\uFF0C\u9760\u4E60\u60EF\u3002\u4E0B\u5468\u6211\u7ED9\u4F60\u628A\u5348\u9910\u518D\u6362\u70B9\u82B1\u6837\uFF0C\u7EE7\u7EED\u3002")))));
  }
  window.WeeklyReportScreen = WeeklyReportScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/WeeklyReportScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/app.jsx
try { (() => {
/* nofat UI kit — day data + app router. */
(function () {
  const {
    BottomNav
  } = window.NofatDesignSystem_2c47dc;
  const {
    useState,
    useEffect
  } = React;
  const DATA = {
    meals: [{
      meal: "breakfast",
      time: "7:00",
      calories: 420,
      name: "高蛋白燕麦杯 + 水煮蛋",
      portion: "1 大杯燕麦 + 2 颗蛋，管饱",
      tags: [{
        label: "高蛋白"
      }, {
        label: "管饱",
        variant: "accent"
      }],
      recipeSteps: ["燕麦 50g 用热牛奶冲开，焖 3 分钟", "加 1 勺无糖花生酱 + 半根香蕉切片", "配 2 颗水煮蛋，蛋白质一次拉满"]
    }, {
      meal: "lunch",
      time: "12:30",
      calories: 560,
      name: "香煎鸡胸 + 藜麦时蔬碗",
      portion: "1 碗 · 约 480g，吃到饱",
      tags: [{
        label: "高蛋白"
      }, {
        label: "低油",
        variant: "primary"
      }, {
        label: "管饱",
        variant: "accent"
      }],
      orderTip: "外食就这么点：鸡胸饭少油少盐、米饭换糙米、再加一份绿叶菜。饮料选无糖的，别喝甜的。"
    }, {
      meal: "dinner",
      time: "19:00",
      calories: 480,
      name: "番茄龙利鱼 + 糙米饭",
      portion: "鱼 1 块 + 半碗糙米 + 一大盘菜",
      tags: [{
        label: "高蛋白"
      }, {
        label: "好消化",
        variant: "primary"
      }],
      recipeSteps: ["龙利鱼解冻擦干，少油两面煎香", "番茄炒出汁，加鱼略煮 2 分钟", "配半碗糙米饭 + 一大盘水煮时蔬"]
    }],
    training: {
      title: "全身燃脂 · 居家",
      minutes: 25,
      exercises: [{
        name: "哑铃高脚杯深蹲",
        detail: "3 组 × 12 次",
        rest: 60,
        muscles: ["臀腿", "核心"],
        points: ["双手抱住哑铃贴在胸前，脚比肩略宽，脚尖微微外展。", "像往后坐椅子一样下蹲，膝盖跟着脚尖方向走。", "蹲到大腿接近水平，再用脚跟发力站起来。"],
        mistake: "膝盖内扣、脚跟离地。下蹲时有意把膝盖往外顶，重心压在整个脚掌上。"
      }, {
        name: "上斜俯卧撑",
        detail: "3 组 × 12 次",
        rest: 60,
        muscles: ["胸", "三头"],
        points: ["双手撑在桌沿或沙发上，身体绷成一条直线。", "屈肘把胸口贴向台面，肘部约 45°。", "推起时呼气，不要塌腰或撅屁股。"],
        mistake: "塌腰。全程收紧腹部，想象头到脚跟一根棍子。"
      }, {
        name: "哑铃俯身划船",
        detail: "3 组 × 12 次",
        rest: 60,
        muscles: ["背", "二头"],
        points: ["屈髋俯身、背挺直，哑铃自然下垂。", "用背把肘往后上方拉，挤压肩胛。", "顶峰停一下再缓慢放下。"],
        mistake: "靠手臂硬拉、耸肩。想着是“用背带动手”，肩膀下沉。"
      }, {
        name: "臀桥",
        detail: "3 组 × 15 次",
        rest: 45,
        muscles: ["臀"],
        points: ["仰卧屈膝，脚跟靠近臀部。", "用臀部发力把髋顶到最高，顶峰夹紧。", "缓慢落下，腰别先着地。"],
        mistake: "用腰顶而不是用臀。顶起前先收紧腹部和臀部。"
      }, {
        name: "平板支撑",
        detail: "3 组 × 40 秒",
        rest: 45,
        muscles: ["核心"],
        points: ["小臂着地，肘在肩正下方。", "收紧腹部和臀部，身体一条直线。", "正常呼吸，别憋气。"],
        mistake: "撅屁股或塌腰。盯着手前方地面，保持颈部中立。"
      }]
    }
  };
  const TABS = [{
    value: "today",
    label: "今日",
    icon: "flame"
  }, {
    value: "train",
    label: "训练",
    icon: "dumbbell"
  }, {
    value: "coach",
    label: "点评",
    icon: "message-circle",
    dot: true
  }, {
    value: "report",
    label: "周报",
    icon: "chart"
  }];
  const SCREEN_TO_TAB = {
    today: "today",
    training: "train",
    exercise: "train",
    coach: "coach",
    report: "report"
  };
  const JUMP = [["login", "登录"], ["onboarding", "入职"], ["today", "今日"], ["training", "训练"], ["exercise", "动作"], ["coach", "点评"], ["report", "周报"]];
  const LS = "nofat_kit_v1";
  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(LS)) || {};
    } catch (e) {
      return {};
    }
  }
  function App() {
    const saved = loadState();
    const [screen, setScreen] = useState(saved.screen || "login");
    const [mealStatus, setMealStatus] = useState(saved.mealStatus || {
      breakfast: "done",
      lunch: null,
      dinner: null
    });
    const [exerciseDone, setExerciseDone] = useState(saved.exerciseDone || [false, false, false, false, false]);
    const [trainingDone, setTrainingDone] = useState(saved.trainingDone || false);
    const [selEx, setSelEx] = useState(saved.selEx || 0);
    useEffect(() => {
      localStorage.setItem(LS, JSON.stringify({
        screen,
        mealStatus,
        exerciseDone,
        trainingDone,
        selEx
      }));
    }, [screen, mealStatus, exerciseDone, trainingDone, selEx]);
    const setMeal = (meal, status) => setMealStatus(s => ({
      ...s,
      [meal]: status
    }));
    const toggleEx = i => setExerciseDone(a => a.map((v, j) => j === i ? !v : v));
    const showTabs = ["today", "training", "exercise", "coach", "report"].includes(screen) && screen !== "exercise";
    let content;
    if (screen === "login") content = /*#__PURE__*/React.createElement(window.LoginScreen, {
      onSubmit: () => setScreen("onboarding")
    });else if (screen === "onboarding") content = /*#__PURE__*/React.createElement(window.OnboardingScreen, {
      onBack: () => setScreen("login"),
      onSubmit: () => setScreen("today")
    });else if (screen === "today") content = /*#__PURE__*/React.createElement(window.TodayScreen, {
      data: DATA,
      mealStatus: mealStatus,
      setMeal: setMeal,
      trainingDone: trainingDone,
      onOpenTraining: () => setScreen("training")
    });else if (screen === "training") content = /*#__PURE__*/React.createElement(window.TrainingScreen, {
      plan: DATA.training,
      doneList: exerciseDone,
      onToggle: toggleEx,
      onOpenExercise: i => {
        setSelEx(i);
        setScreen("exercise");
      },
      onBack: () => setScreen("today"),
      onFinish: () => {
        setTrainingDone(true);
        setScreen("today");
      }
    });else if (screen === "exercise") content = /*#__PURE__*/React.createElement(window.ExerciseDetailScreen, {
      ex: DATA.training.exercises[selEx],
      checked: exerciseDone[selEx],
      onToggle: () => toggleEx(selEx),
      onBack: () => setScreen("training")
    });else if (screen === "coach") content = /*#__PURE__*/React.createElement(window.EveningReviewScreen, {
      mealStatus: mealStatus,
      trainingDone: trainingDone
    });else if (screen === "report") content = /*#__PURE__*/React.createElement(window.WeeklyReportScreen, null);
    const onTab = t => {
      if (t === "today") setScreen("today");else if (t === "train") setScreen("training");else if (t === "coach") setScreen("coach");else if (t === "report") setScreen("report");
    };
    const statusDark = false;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 22,
        padding: "28px 16px 40px",
        minHeight: "100vh",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(window.NofatDesignSystem_2c47dc.Logo, {
      size: 26
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 7,
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: 460
      }
    }, JUMP.map(([s, label]) => /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => {
        if (s === "exercise") setSelEx(0);
        setScreen(s);
      },
      style: {
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 12.5,
        padding: "7px 13px",
        borderRadius: "var(--radius-pill)",
        background: SCREEN_TO_TAB[screen] === s || screen === s ? "var(--color-primary)" : "var(--surface-card)",
        color: SCREEN_TO_TAB[screen] === s || screen === s ? "#fff" : "var(--text-secondary)",
        boxShadow: "var(--shadow-xs)"
      }
    }, label)))), /*#__PURE__*/React.createElement(window.PhoneFrame, {
      statusDark: statusDark,
      bg: screen === "coach" ? "var(--bg-canvas-warm)" : "var(--bg-canvas)"
    }, content, showTabs && /*#__PURE__*/React.createElement(BottomNav, {
      value: SCREEN_TO_TAB[screen],
      onChange: onTab,
      items: TABS
    })));
  }
  window.NofatApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/nofat/frame.jsx
try { (() => {
/* nofat UI kit — phone frame + iOS status bar. Exports to window. */
const {
  useState: _useStateFrame
} = React;
function StatusBar({
  dark = false
}) {
  const color = dark ? "#fff" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      height: 50,
      paddingTop: 8,
      flex: "none",
      color,
      fontFamily: "var(--font-number)",
      fontWeight: 700,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: "0.02em"
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "12",
    viewBox: "0 0 18 12",
    fill: color,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "8",
    width: "3",
    height: "4",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "6",
    width: "3",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "10",
    y: "3",
    width: "3",
    height: "9",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "0",
    width: "3",
    height: "12",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "12",
    viewBox: "0 0 16 12",
    fill: color,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 2.4c2.5 0 4.8 1 6.5 2.6l1.5-1.6A11 11 0 0 0 8 0 11 11 0 0 0 0 3.4L1.5 5A9 9 0 0 1 8 2.4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 6.2c1.4 0 2.7.6 3.7 1.5l1.5-1.6A8 8 0 0 0 8 4a8 8 0 0 0-5.2 2.1L4.3 7.7A5.5 5.5 0 0 1 8 6.2Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8",
    cy: "10.4",
    r: "1.6"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "13",
    viewBox: "0 0 26 13",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "22",
    height: "12",
    rx: "3.5",
    stroke: color,
    strokeOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "17",
    height: "9",
    rx: "2",
    fill: color
  }), /*#__PURE__*/React.createElement("rect", {
    x: "24",
    y: "4",
    width: "2",
    height: "5",
    rx: "1",
    fill: color,
    fillOpacity: "0.4"
  }))));
}
function PhoneFrame({
  children,
  statusDark = false,
  bg = "var(--bg-canvas)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 414,
      height: 868,
      background: "#171f1b",
      borderRadius: 58,
      padding: 13,
      boxShadow: "0 50px 100px -20px rgba(12,40,28,0.45), 0 0 0 2px rgba(255,255,255,0.04) inset",
      flex: "none",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: 46,
      overflow: "hidden",
      background: bg,
      position: "relative",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 11,
      left: "50%",
      transform: "translateX(-50%)",
      width: 120,
      height: 34,
      background: "#000",
      borderRadius: 20,
      zIndex: 60
    }
  }), /*#__PURE__*/React.createElement(StatusBar, {
    dark: statusDark
  }), children));
}

/** Scrollable content area inside the frame. */
function Screen({
  children,
  bg,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: "auto",
      overflowX: "hidden",
      background: bg,
      position: "relative",
      ...style
    }
  }, children);
}
Object.assign(window, {
  PhoneFrame,
  StatusBar,
  Screen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/nofat/frame.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CoachBubble = __ds_scope.CoachBubble;

__ds_ns.ExerciseRow = __ds_scope.ExerciseRow;

__ds_ns.ListRow = __ds_scope.ListRow;

__ds_ns.MealCard = __ds_scope.MealCard;

__ds_ns.MediaPlaceholder = __ds_scope.MediaPlaceholder;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.MetricRing = __ds_scope.MetricRing;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.AppBar = __ds_scope.AppBar;

__ds_ns.BottomNav = __ds_scope.BottomNav;

})();
