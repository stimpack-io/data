

export default function (state = defaultPage, action) {

	if(action.type == "NAVIGATE") {
		console.log(action.payload);
		state = action.payload;
	}

    return state;
}
