var xflagable = function(anyObj) {
	var promises = {};
	var fireCallbacks = function(flagName) {
		if (promises[flagName]) {
			var c = 0;
			promises[flagName].cbArr = promises[flagName].cbArr || [];
			for (var x in promises[flagName].cbArr) {
				if (!promises[flagName].cbArr[x].fired) {
					promises[flagName].cbArr[x].fn();
					promises[flagName].cbArr[x].fired = true;
					c++;
				}
			}
			if (c != 0) {
				//console && console.log('xflagable flag ' + flagName + ' rised, fired ' + c + ' callbacks.');
			} else {
				//console && console.log('xflagable flag ' + flagName + ' rised, but there is not callbacks.');
			}
		}
	};
	var fn = function(arg1, arg2, arg3, arg4,arg5) {
		var action = arg1;
		var flagName = arg2;
		switch (action) {
			case 'create':
				//console && console.log(arg1+' '+arg2+' '+arg3+' '+typeof arg4);
				var vars = arg3;
				var fnArr = arg4;
				promises[flagName] = {};
				for (var x in vars) {
					var propName = vars[x];
					promises[flagName][propName] = false;
				}
				if (fnArr) fn('cb', flagName, fnArr);
				break;
			case 'createFromArray':
				var arr = arg3; //array with prop
				var prop = arg4; //array with prop
				var fnArr = arg5;
				var vars = [];
				for(var x in arr){
					if(typeof arr[x][prop] !='undefined'){
						vars.push(arr[x][prop]);
					}
				}
				if(vars.length==0){
					console.log('xflagable createFromArray error');
					return;
				}
				fn('create',arg2,vars,fnArr);
				console.log(promises);
			break;
			case 'set':
				if (promises[flagName]) {
					if (typeof arg3 == 'string') {
						var propName = arg3;
						var propVal = arg4;
						if (typeof promises[flagName][propName]=='boolean') {
							promises[flagName][propName] = propVal;
							//console.log('xflagable set ' + flagName + ' ' + propName + ' ' + propVal);
						}
					} else {
						var propObj = arg3;
						for (var x in propObj) {
							if (typeof promises[flagName][x]=='boolean') {
								promises[flagName][x] = propObj[x];
								//console.log('xflagable set ' + flagName + ' ' + x + ' ' + propObj[x]);
							}
						}
					}
					fn('fireCallbacksOnFlagsRised', flagName);
				}
				break;
			case 'cb':
				if (promises[flagName]) {
					var fnArr = arg3;
					if(typeof fnArr == 'function') fnArr = [fnArr];
					for (var x in fnArr) {
						promises[flagName].cbArr = promises[flagName].cbArr || [];
						promises[flagName].cbArr.push({
							fn: fnArr[x],
							fired: false
						});
						//console && console.log('xflagable '+flagName+' cb added');
					}
				}
				fn('fireCallbacksOnFlagsRised', flagName);
				break;
			case 'fireCallbacksOnFlagsRised':
			case 'rised':
			case 'ok':
			case 'ready':
				if (promises[flagName]) {
					var fnArr = arg3;
					console.log(flagName);
					for (var x in promises[flagName]) {
						var prop = promises[flagName][x];
						//console.log(x + ' ' + prop);
						if (!prop || (typeof prop != 'function' && prop == false)) {
							console.log('xflagable checking false');
							return false;
						}
					}
					console.log('xflagable checking true');
					fireCallbacks(flagName);
					return true;
				}
				break;
			default:
				console && console.log('xflagable: action ' + action + ' unknown.');
				break;
		}
	};
	anyObj.$flag = fn;
	anyObj.$xflagable = fn;
	anyObj.$F = fn;
};