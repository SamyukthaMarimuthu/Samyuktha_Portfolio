import streamlit as st
from pathlib import Path
from streamlit.components.v1 import html as st_html

st.set_page_config(page_title="Samyuktha — Portfolio (Streamlit)", layout="wide")
st.title("Samyuktha — Portfolio — Streamlit wrapper")

BASE = Path(__file__).parent

# Load files from the repo and inline CSS/JS so the page renders correctly on Streamlit
index_path = BASE / "index.html"
css_path = BASE / "styles.css"
js_path = BASE / "script.js"

if not index_path.exists():
    st.error("`index.html` not found in workspace root.")
    st.stop()

index_html = index_path.read_text(encoding="utf-8")
css = css_path.read_text(encoding="utf-8") if css_path.exists() else ""
js = js_path.read_text(encoding="utf-8") if js_path.exists() else ""

# Inline CSS into <head>
if css:
    if "</head>" in index_html:
        index_html = index_html.replace("</head>", f"<style>\n{css}\n</style>\n</head>")
    else:
        index_html = f"<style>\n{css}\n</style>\n" + index_html

# Inline JS before </body>
if js:
    if "</body>" in index_html:
        index_html = index_html.replace("</body>", f"<script>\n{js}\n</script>\n</body>")
    else:
        index_html = index_html + f"\n<script>\n{js}\n</script>"

# Options for the user
st.sidebar.markdown("**Display options**")
height = st.sidebar.slider("Canvas height (px)", 400, 2000, 900)
show_source = st.sidebar.checkbox("Show raw HTML source", value=False)

if show_source:
    st.code(index_html[:100000], language="html")

# Render the inlined site inside a Streamlit component
st_html(index_html, height=height, scrolling=True)

st.markdown("---")
st.caption("This page is a Streamlit wrapper that inlines your `styles.css` and `script.js` so the static site renders inside Streamlit.")