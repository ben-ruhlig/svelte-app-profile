<!-- importing styles from app.css here instead of directly in app.html -->
<script>
    import '../app.css';
    import GitIcon from "$lib/assets/github-mark-white.png";
    import Favicon from "$lib/assets/favicon/favicon-32x32.png";
    import LinkedinIcon from "$lib/assets/In-Blue-Logo.png";
</script>

<style>
    header, footer {
        background-color: black;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    footer {
        background-color: lightgrey;
    }
    header a, footer a {
        text-decoration: none;
        margin: 0 15px;
        color: white;
    }
    footer a {
        color: black;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px;
        width: var(--page-content-width);
    }
    #favicon, #copyright {
        margin-left: 0px;
    }
    #right-internal{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        padding-right: 0px;
    }
    #right-external {
        display: flex;
        margin-left: 80px;
        flex-flow: nowrap
    }
    #body-outline {
        padding: 10px 40px;
    }
</style>

<div id=outside>

    <!-- Top pane of the website -->
    <header>
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
    </header>

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

