<!-- importing styles from app.css here instead of directly in app.html -->
<script>
    import '../app.css';
    import GitIcon from "$lib/assets/github-mark-white.png";
    import Favicon from "$lib/assets/favicon/favicon-32x32.png";
    import LinkedinIcon from "$lib/assets/In-Blue-Logo.png";
</script>

<style>
    /* Adjust styles as needed */
    
    header {
        background-color: var(--color-pallete-dark-blue);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        width: 1080px;
    }
    a {
        text-decoration: none;
        margin: 0 10px;
        color: var(--color-pallete-very-light-tan);
    }
    .right{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
    }
    #right-external {
        margin-left: 80px;
    }
</style>

<header>
    <nav>
        <!-- Left side: Website favicon linking to home page -->
        <a href="/">
            <img src={ Favicon } alt="Website Favicon" style="width: 24px; height: 24px;">
        </a>
        <!-- Right side: internal & external links -->
        <div class="right">
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

<div id=container-body>

</div>

<slot />