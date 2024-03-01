<script>
    export let data;
    import profilePic from "$lib/assets/linkedin_headshot.jpg";
</script>

<style>
    #profile-picture {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<div id=profile-content>
    <div id=profile-picture>
        <h1>Hey, I'm { data.firstName } { data.lastName }</h1>
        <img src={ profilePic } alt="Profile picture"/>
    </div>
    <div>
        <h1>Hey, I'm {data.first_name} {data.last_name}</h1>
        <p>I'm a finance professional that's has since pursued my passion to learn computer science and build things.</p>
    </div>
    <div id=portfolio-highlights>
    </div>
</div>
