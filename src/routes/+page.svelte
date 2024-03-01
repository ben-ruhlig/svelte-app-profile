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
    <div id=portfolio-highlights>
        <h2>Projects</h2>
        <p>
            This section should show my greatest hits projects (or latest 3), with a "see more..." link to all my projects. Probably tile format.
        </p>
        <p>
            -------- Make this a fancy section dividing line ------------------------ 
        </p>
    </div>
    <div>
        <h2>Projects</h2>
        <h3>Summary</h3>
        <p>
            I'm a finance professional with 10 years <b>sTODO: Make experience # dynamic</b> of experience. I'm also pursing a Master's in Computer and Information Technology (MCIT)
            <b>TODO: Turn into a link to the website</b> at the University of Pennsylvania (UPenn).
        </p>
        <h3> My Story </h3>
        <p>
            My love for technology has very practical beginnings. I stumbled into it trying to solve the numerous pain points I experienced as a finance professional in the modern era....
        </p>
        <h3> Generic Resume </h3>
        <p>
            Use LinkedIn API to automatically update from my LinkedIn profile.
        </p>
    </div>

</div>
