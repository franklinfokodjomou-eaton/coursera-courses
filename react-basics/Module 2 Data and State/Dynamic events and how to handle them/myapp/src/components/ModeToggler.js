function ModeToggler() {
    let darkModeOn = false;
    const darkMode = <h1>Dark Mode</h1>;
    const lightMode = <h1>Light Mode</h1>;

    function handleClick() {
        darkModeOn = !darkModeOn;
        if (darkModeOn == true) {
            console.log('Dark mode is on');
        } else {
            console.log('Dark mode is off');
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button onClick={handleClick}>
                Toggle Mode
            </button>
        </div>
    )
}

export default ModeToggler;