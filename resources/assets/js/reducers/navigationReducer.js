export default function (state = "Packs", action) {

	if(action.type == "NAVIGATE") {
		console.log(action.payload);
		state = action.payload;
	}

    return state;
}
