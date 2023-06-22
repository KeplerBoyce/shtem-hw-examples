const imageSrcs = [
    "Bidoof.png",
    "Clodsire.png",
    "Dugtrio.png",
    "Quagsire.png",
    "Regirock.png",
    "Wailord.png",
];
let imageIndex = 0;

const handleClick = () => {
    imageIndex++;
    imageIndex %= imageSrcs.length;
    const image = document.getElementById("image");
    image.src = "images/" + imageSrcs[imageIndex];
}

