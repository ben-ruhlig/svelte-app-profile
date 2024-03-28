<style>
    #games-outline {
        display: flex;
        flex-direction: column;
    }
    #games-ribbon {
        border-bottom: dashed;
        padding-bottom: 10px;
    }
    #games-ribbon ul {
        display: flex;
        justify-content: center;
        padding-left: 0px;
        list-style: none;
    }
    #games-ribbon ul li {
        padding-left: 20px;
        padding-right: 20px;
    }
</style>

<div id="games-outline">
    <div id="games-ribbon">
        <ul>
            <li>
                <a href="/games/trivia">trivia</a>
            </li>
            <li>
                <a href="/games/game2">game #2</a>
            </li>
            <li>
                <a href="/games/game3">game #3</a>
            </li>
        </ul>
    </div>

    <div id="games-conent">
        <slot/>
    </div>
</div>