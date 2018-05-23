export default function (state = "Packs", action) {
	
	if(action.type == "NAVIGATE") {
		state = action.payload;
	}
	
    return state;
}