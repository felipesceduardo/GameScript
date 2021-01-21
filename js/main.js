const BOOT_ROM = "DMG_ROM.bin";

window.onload = async () => {
	console.log("Hello world!");
	const gameloc = document.getElementById("gamewindow");
	console.log(gameloc);

	const buffer = await fetch(BOOT_ROM);
	const blob = await buffer.blob();
	const abuff = await blob.arrayBuffer();
	const arr = new Uint8Array(abuff);
	console.log(arr);
}
