const data = {};

function load() {
    const config = {
        "dif-user-name": {
            prop: 'innerText',
            path: ['Qt', 'zW']
        },
        "dif-user-img": {
            prop: 'src',
            path: ['Qt', 'cL']
        }
    }

    loadUserData(config);
    jsonLoadResource("shop").then((json) => {
        data.shop = json;
    })
    filterinput()
}

async function jsonLoadResource(name) {
    return await new Promise((resolve, reject) => {
        fetch(`${window.location.origin}/resources/${name}.json`)
            .then(response => response.json())
            .then(resolve);
    });
}

function filterinput() {
    const input = document.getElementById("input-ft")

    input.addEventListener('input', (e) => {
        document.querySelectorAll(".filter-data").forEach((label)=>{
            if (label.innerHTML.toLowerCase().search(input.value.toLowerCase()) === -1) {
                label.parentElement.style.display = "none";
            }
            else{
                label.parentElement.style.display = "block";
            }
        })

    })
}