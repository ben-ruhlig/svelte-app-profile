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
        border: solid;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    #flex-outside > * {
        border: dotted;
    }
    #flex-outside > nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #flex-outside > nav > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #flex-outside > #body-outline {
        flex-grow: 1;
    }
</style>

<div id=flex-outside>

    <!-- Top pane of the website -->
    <nav id=top>
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
    <footer>
        <nav id=bottom>
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
    </footer>

</div>

