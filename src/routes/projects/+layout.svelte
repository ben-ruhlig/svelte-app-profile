<style>
    #projects-outline {
        display: flex;
        flex-direction: column;
    }
    #projects-ribbon {
        border-bottom: dashed;
    }
    #projects-ribbon ul {
        display: flex;
        justify-content: center;
        padding-left: 0px;
        list-style: none;
    }
    #projects-ribbon ul li {
        padding-left: 20px;
        padding-right: 20px;
    }

</style>

<div id="projects-outline">
    <div id="projects-ribbon">
        <ul>
            <li>
                <a href="/projects/project1">Project #1</a>
            </li>
            <li>
                <a href="/projects/project2">Project #2</a>
            </li>
            <li>
                <a href="/projects/project3">Project #3</a>
            </li>
        </ul>
    </div>

    <div id="projects-conent">
        <slot/>
    </div>
</div>