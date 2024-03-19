<!-- importing styles from app.css here instead of directly in app.html -->
<script>
    import '../app.css';
    import GitIcon from "$lib/assets/github-mark-white.png";
    import Favicon from "$lib/assets/favicon/favicon-32x32.png";
    import LinkedinIcon from "$lib/assets/In-Blue-Logo.png";
</script>

<style>
    #flex-outside {
        font-family: "proxima nova light", "Helvetica Neue", Helvetica, Arial, Sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-basis: var(--page-content-width);
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
    }
    nav div {
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    #flex-outside > #body-outline {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        padding: 10px 40px;
    }
    #header {
        background-color: black;
    }
    #footer {
        background-color: lightgrey;
    }
    #right-external {
        margin-left: 80px;
        display: flex;
        flex-flow: nowrap
    }
    #right-internal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        padding-right: 0px;
    }
    a {
        text-decoration: none;
        margin: 0 15px;
        color: white;
    }
    #footer a {
        color: black;
    }
</style>

<div id=flex-outside>

    <!-- Top pane of the website -->
    <nav id=header>
        <!-- Left side: Website favicon linking to home page -->
        <a id=favicon href="/">
            <img src={ Favicon } alt="Website Favicon" style="width: 50px; height: 50px;">
        </a>
        <!-- Right side: internal & external links -->
        <div id=right-internal>
            <!-- Links to internal pages -->
            <div id=right-internal>
                <a href="/">profile</a>
                <a href="/projects">projects</a>
                <a href="/blog">blog</a>
            </div>
            <!-- Links to external sites -->
            <div id=right-external>
                <a href="https://github.com/ben-ruhlig">
                    <img src={ GitIcon } alt="Github Favicon" style="width: 32px; height: 32px;">
                </a>
                <a href="https://www.linkedin.com/in/benruhlig/">
                    <img src={ LinkedinIcon } alt="LinkedIn" style="width: 32px; height: 32px;">
                </a>
            </div>
        </div>
    </nav>

    <!-- Middle content section of the website -->
    <div id=body-outline>
        <slot />
    </div>

    <!-- Bottom pane of the website -->
    <nav id=footer>
        <!-- Left side: Website favicon linking to home page -->
        <a id=copyright href="/">&copy 2024 Benjamin Ruhlig</a>
        <!-- Right side: internal & external links -->
        <div class="right">
            <!-- Links to internal pages -->
            <div id=right-internal>
                <a href="/">profile</a>
                <a href="/projects">projects</a>
                <a href="/blog">blog</a>
            </div>
        </div>
    </nav>

</div>

