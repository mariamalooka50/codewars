function buildFun(n){
	let newFunc = [];

	for (let i = 0; i< n; i++){
		newFunc.push(function(){
			console.log(i);
		});
	};
	return newFunc;
};