<script>
    export let data;
    import GitIcon from "$lib/assets/github-mark-white.png";
</script>

<style>
    #body-content {
        display: flex;
        flex-direction: column;
        width: var(--page-content-width);
        padding: 10px 40px;
    }
    #body-outline {
        display: flex;
        justify-content: center;
        height: 100%;
    }
</style>

<!-- Middle content section of the website -->
<div id=body-outline>
    <div id=body-content>
        <div id=profile-picture>
            <p>This is where the profile picture belongs</p>
        </div>
        <div>
            <h1>Hey, I'm {data.first_name} {data.last_name}</h1>
            <p>I'm a finance professional that's has since pursued my passion to learn computer science and build things.</p>
        </div>
        <div id=portfolio-highlights>
        </div>
    </div>
</div>
