
	/**
	 * Release date: January 2, 2017
	 */

	var WikitudePlugin = function() {

		/**
		 *  This is the SDK Key, provided to you after you purchased the Wikitude SDK from http =//www.wikitude.com/store/.
		 *  You can obtain a free trial key at http =//www.wikitude.com/developer/licenses .
		 */

		// ALL Caught Apps
		this._sdkKey = "2t692QQdHhvrBKNJVUuA+aUTov2wtORU1LmKRwMj9SSgb9eMLiEhOTazodOZdFsg96vDji5LEapu/sS3vLw6N55euPO+1TDy967XdqINYbB+VpRD+Rm8qXBZCf+z/LaGAFILjDCT+OlriiuPJbDKMw8FDPfxQKCkrk4AAa/di+hTYWx0ZWRfXxhfu7zhrDZznfO7rD/hg61xkn436XwoD06q2En/19kZ9T1/fPuIYIwbIxvDO1vvby3S8XtWSC+Nyf0GI3a4vNclY38v+kW4eFvhK/vI4Sn/9lA9XXCDZY5rarL4jo2DsCmw10qxrBCodKYqote3FEEWc0LnYrxcvqwmsemISXSqCDEfRonKSoUrny+MLfr0b3M3Xlm4ZfaebqfIKnFYRZS93FP7XX+eAQBdhOlDrIIVvuZBlCM8jJyyHt2zZoYdBVgTdwtjubZtx362MFLHljtZ7PaHe17XJaQ26s860wl5+AD0Q8yxqu/tt0fr7gnMZrepdxxqIXI5cLSWENjeO2FiOewsA6wesei5H5Y7vMnVKWco6EHHoWKRAs2/Sz3ZqywuAYpojf8UwOpFtoCj49AMLkCTr7YzVsLe9hqkcdpaGhsmQwOIdAVXgeQ37FR9RdOz1jZUyVzW3o4H+l08yjkZSq/QDA8E8NTwGyg0sNMNTOdd5nIc/nw+Dwyw2hXOba4N2R3ZhuT/DaoMc0ZTZqWH9ICEP30j0+2jAtyJzhQJ9IkvdgjfNZ7iDPmL1Hft+t2k5ZP5yvUpdynCzB7B2nTwJ516VKXgdIH60/T2sfNmr5OKKLmsD73xQcjEDqD24lm/8epwSpkGr6DsuFeIA3bMHpvBYpiiU1uGegzDoR6cqCAcN4qwWjOa+/kxi5u2Dlptegzg1g1vTjRr0p5fLXV4BK5poFfjN0wSngIZO3VgU7/tXzMNrtbmPhBT67q1t2la9g6zoUZKpwSw2jwZ792Gmv8zckYTtXoFJu7/Lpm8bgIyAwjt/a4I2ev3ggTX9AvbTbmX5Z7Bpr5rpr3ivfHF5Wx5ZJetO1dYUlV+t0ZBZshCebJdW+iBgrlorlwPGRaTeKvrOS8peDays/fASU6oYFN2PHYxfjoOdwLSAVAQxshR1VBCQJU2lvGSvjsaao+iwwRlT+nzMkDrP9dnKaQbEx2OWGKo0e986p8ekZ/Ao0eucQmsLVnxO49NAE1rxtpkgueK0CgLVVIpe412cya3CwSuyibNE/9niXl/YYBi266bk8W58EoqtCzlgnDeLnWB4uXbtLBWH/nrgv2deqxnzq2nH9SoGcj0S8A40zCOfSEa9RUbcIQE02yDrgCURpIug4TghJ3OTMdo9zjGVgWmjrss81x8VNM3XeHDnsaUSZ0krwj/aClYBJSB6ufRIvCnaIqC2M3td/nyQqz6xntmJFUnyPgP6JvH4wYMVg89tYQYsmqnlCQfAzbuJtOFYEx3YSEpOrJfXYzq9wlQCwDMTPpQ17cCK1gmnJacwsbSnIESXoaKJTjLSR0dHGeCRNDSz1IfmdEjJO1Ez3da5gnmyfajDNnS6ALjmQiB48ifCKqjj3Zq2d8U1LhAEnZ7D5Ikm+PHjGUc";
		// EXCEPT
		// Costa Experiences (Costa)
		//this._sdkKey = "Tgwjj8FRkw1YctjFuXBH+mLvPSpuP6HTLIwmt/4K8i0aiHKx7c4GAK2JgHTSihsNRZ6naZwa6dvcYmUUOow/a9DdsVfhAhJkZ58JeO/ukko5m9iQMiXPDFaDJlna3cyeZP+AtNZj5b7nJ0gg5vKQ1ElFzPRDL5rfWmn6FGVtHTpTYWx0ZWRfX6uyzqU2psXN39Tx/cOsRUp1/lrdLk65M5YwkvIsooyVElJwqPgoZdQeFTLyo8il58F16TpMsS378OkZluh+NOxvYEYNXJ+8If6SFzcPs24xdxTBO+47fC5dV7LveMjdyhklVoNso2RP64FGHKR6LiAT6EK5F+i+kc7ErU6FKGyuIrsi+szU2pc1CveCtj77tYWBMuIfTR8b/gPXhc8JZDkHK3J6VPgQgnnIroqjm4EYyCa7hqu9osFbRkdVzMKoh5DM1HI6ty2qFe37JI9/H2R6oEqhwwYM4Rq1VxvIVMBNfbz8eMvcfb9iXrqWhveVNp7ttBQ+JKgzYMKbuazEdgskaSanFUNpFYZFLX4qnVP3q6fywpqvIaGc7miAr4zDSBqmza9ndos1/DZRuU7nz6PGc3w2pEdpbD4JN2MDAqqN1mHSZt62A3Quz6iyN10FORF9QlLMKeV/fK7cNuY5z64mxFFOZlDa5oEHebXWnTEDB9r0JMhhTkXeO4A0dH7vtUIDqiZ/dqaY4IPzHoSx6y+w+bdfsRLBnGHk66fLuV0WYYM+XMHqHC3x3nj6ky71S0DYayFHHi1ldMNrRftiSC6M5DVm4e7uGQ==";
		// Smit Groepsactiviteiten (Smit)
    //this._sdkKey = "jZZlh7O21j9IjizOOd4A8jSkaN97+yZx5IKihDYAuPycxd3b0UfSDrLs/GLhKE1/2nEoFPdEiCvJikkvBDKy+s6d598Z3Ms0sNX6VLw7jD+sujyagMpoM0m3qH2brTSgDLN0kELWzCjzBQBzltv73eN7EwkxqB+VEpST4plgjXlTYWx0ZWRfX5bWFCG8b19PTjuz1TK0OH/ODJk5y+Z0voy5igTgLLQU/haqTnbVBm94aK+089Ia/qYDRf0f26+bsh2p60jhgXsETl9E/xRCmT12HJZ09yXlmvmNf1gzNlq305kzuEDiUYi3lRnIr6qmSeP8ED2WN/JqsZbhWDEK1k2zaBi7jMdpE7Lw9CD4JKiJjH4KlYzqQE8YijYU2SWm4MpyEG22UGvYwHm5Pa9vtWuwlLxOLgU5HmkiJdke5wsOX973sUvPX42jbSjR04UXsnlITjBpEcAlC7OLObCdOvufJ20jq/ztXYQCSlEfJUnXJBR3ATh3Ke7zf+nMq2NcjKYnnaVuwnTMz8k0QB1QHM6dlnMsykkLxBfG+bGEyv/XY/A1KGgMe3VFd450kFBUNQgx/0fniZHcmUKcM9O/wEQA9em8cD5dqx8XkLHlc3eZbgHNhzqbqpxeR4uyRw91+ICOHKT+Rq6jUm58HIZDRXw1f9yoNReQhFhjaH7vZ4jJkzU44u68OaDxJh+/JNYZNGdb1OIfYorjGWlcRASaNohKWvqfiY3bowspCemGl7FER3/f6xYkdPjqstgrafwJU+Jk1DYE/xdc+lLb2XTMQg==";
		// Activents / Dept / Funomic (ADF)
		//this._sdkKey = "G0jQXZxZ7oIzpXiDLLy4cYpIbxSZniloQvosQz1chzMf7pOqPqfIlDpBq8TWCHZCo9xC6T9EuMHi1js+4ptZfQ/77ZhEi7tXAXbirHDrl794n5KMrcEZ0T47yWkIEl6D4DSbb/RMz3kwVKlylAZSQfEroF5FQOLE5uQA/+tHR/hTYWx0ZWRfXxsI8B9o7DdQDa4SoKo4hqWG3d2DEqcOhvvcDbphqAMaYFjctC6+Sg0ZK5tUYQ33LRSNzIR7qwJ9iLiW/xWwunxTkELSuofldHefg1q+bhZiIEwOOk5ylsCdYou7ld42RNU85mkcZOM1aAagkSNmOxvTRxt4JOUfTndIVi7cw1azTM5RFM3DBOAzKUvS3wyeBqxNeA3v9a8z3B19csDlcg6Jx97FCSAndb2vCS93nU/ivCqTTgQ6T1kl1LSACNcoaLQyqMxUL10UpfgqxLshAjVtK8Qpm7s6Y3iZNU5R4/QpS2hAToeqoNKPeohOUk9LHMMQOZNclI2UR0ZsruVgD8Nz3l5CiRt6zsDJ4+W/qwIiTc73fyOAta0tcv2vyxuI8ZZEXNcpNbxrtRwzn099JfZo5BKi0lJopCAwUsuM6OclXm2e41Jj/kUPs+AezfCfHsiDlVrr8ZSEQ2T43gKIsAwKOXkuTd3O8LqgPhq8OrDvoslSuJoMVqs2hz3Fs5AVR9HgHDYBhMJgjwlAyVgjhJ+WWeMR6gkMoxMN2i8aH7WM7b2Z4WBhjMjD4EhdnsFhmk0TeVncTdsOlkH573/hAYUuKNyGB13HUw+FZcgmxk4V1asI4k9kY8UbW4K7vDo4/Lb4hu0JUbjdvJS4W/Ejf9l0qtEpSkOJwmHiiWGr3ackS0S3E42giqh68Ts01W1PzSbdooaTMvj6AfEpmUKmHevQV5xFGERqBuKosSoISu3LKf7pHResTpXMeK66BHUUcySI84PjdzIKIRY3av5q7u0rDlU+pQczhg==";
		
		/**
		 *  The Wikitude SDK can run in different modes.
		 *      * Geo means, that objects are placed at latitude/longitude positions.
		 *      * 2DTracking means that only image recognition is used in the ARchitect World.
		 *  When your ARchitect World uses both, geo and ir, than set this value to "IrAndGeo". Otherwise, if the ARchitectWorld only needs image recognition, placing "IR" will require less features from the device and therefore, support a wider range of devices. Keep in mind that image recognition requires a dual core cpu to work satisfyingly.
		 */
        this.FeatureGeo             = "geo";
        this.FeatureImageTracking   = "image_tracking";
        this.FeatureInstantTracking = "instant_tracking";
        this.FeatureObjectTracking  = "object_tracking";
        this.Feature2DTracking      = "2d_tracking";

        /**
         *  Start-up configuration: camera position (front or back).
         */
        this.CameraPositionUndefined = 0;
        this.CameraPositionFront     = 1;
        this.CameraPositionBack      = 2;

        /**
         *  Start-up configuration: camera focus range restriction (for iOS only).
         */
        this.CameraFocusRangeNone = 0;
        this.CameraFocusRangeNear = 1;
        this.CameraFocusRangeFar  = 2;
	};


	/*
	 *	=============================================================================================================================
	 *
	 *	PUBLIC API
	 *
	 *	=============================================================================================================================
	 */

	/* Managing ARchitect world loading */

	/**
	 *  Use this function to check if the current device is capable of running ARchitect Worlds.
	 *
	 * @param {function} successCallback A callback which is called if the device is capable of running ARchitect Worlds.
	 * @param {function} errorCallback A callback which is called if the device is not capable of running ARchitect Worlds.
	 */
	WikitudePlugin.prototype.isDeviceSupported = function(successCallback, errorCallback, requiredFeatures) {

		// Check if the current device is capable of running Architect Worlds
		cordova.exec(successCallback, errorCallback, "WikitudePlugin", "isDeviceSupported", [requiredFeatures]);
	};

    /**
     * Use this function to request access to restricted APIs like the camera, gps or photo library.
     *
     * @param {function} successCallback A callback which is called if all required permissions are granted.
     * @param {function} errorCallback A callback which is called if one or more permissions are not granted.
     * @param {function} requiredFeatures An array of strings describing which features of the Wikitude SDK are used so that the plugin can request access to those restricted APIs.
     */
    WikitudePlugin.prototype.requestAccess = function(successCallback, errorCallback, requiredFeatures) {
        cordova.exec(successCallback, errorCallback, "WikitudePlugin", "requestAccess", [requiredFeatures]);
    };

	/**
	 *	Use this function to load an ARchitect World.
	 *
     *  @param {function(loadedURL)}  		successCallback		function which is called after a successful launch of the AR world.
     *  @param {function(error)}		 	errorCallback		function which is called after a failed launch of the AR world.
     *	@param {String} 					architectWorldPath	The path to a local ARchitect world or to a ARchitect world on a server or your
	 *  @param {String} 					worldPath			path to an ARchitect world, either on the device or on e.g. your Dropbox.
     *  @param {Array} 						requiredFeatures	augmented reality features: a flags mask for enabling/disabling
     *                                  geographic location-based (WikitudePlugin.FeatureGeo) or image recognition-based (WikitudePlugin.Feature2DTracking) tracking.
	 *  @param {json object} (optional) startupConfiguration	represents the start-up configuration which may look like the following:
	 *									{
	 *                               		"cameraPosition": app.WikitudePlugin.CameraPositionBack,
	 *                                  	    	"*OptionalPlatform*": {
	 *											"*optionalPlatformKey*": "*optionalPlatformValue*"
	 *                                      	}
	 *                               	}
	 */
	WikitudePlugin.prototype.loadARchitectWorld = function(successCallback, errorCallback, architectWorldPath, requiredFeatures, startupConfiguration) {

		cordova.exec(successCallback, errorCallback, "WikitudePlugin", "open", [{
			"SDKKey": this._sdkKey,
			"ARchitectWorldURL": architectWorldPath,
			"RequiredFeatures": requiredFeatures,
		    "StartupConfiguration" : startupConfiguration
		}]);

		if (cordova.platformId == "android" && this.customBackButtonCallback == null) {
            cordova.exec(this.onBackButton, this.onWikitudeError, "WikitudePlugin", "setBackButtonCallback", []);
		}

		// We add an event listener on the resume and pause event of the application life-cycle
		document.addEventListener("resume", this.onResume, false);
		document.addEventListener("pause", this.onPause, false);
		document.addEventListener("backbutton", this.onBackButton, false);
	};

	/* Managing the Wikitude SDK Lifecycle */
	/**
	 *	Use this function to stop the Wikitude SDK and to remove it from the screen.
	 */
	WikitudePlugin.prototype.close = function() {

		document.removeEventListener("pause", this.onPause, false);
		document.removeEventListener("resume", this.onResume, false);
		document.removeEventListener("backbutton", this.onBackButton, false);

		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "close", [""]);
	};

	/**
	 *	Use this function to only hide the Wikitude SDK. All location and rendering updates are still active.
	 */
	WikitudePlugin.prototype.hide = function() {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "hide", [""]);
	};

	/**
	 *	Use this function to show the Wikitude SDK again if it was hidden before.
	 */
	WikitudePlugin.prototype.show = function() {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "show", [""]);
	};

	/* Interacting with the Wikitude SDK */

	/**
	 *	Use this function to call JavaScript which will be executed in the context of the currently loaded ARchitect World.
	 *
	 * @param js The JavaScript that should be evaluated in the ARchitect View.
	 */
	WikitudePlugin.prototype.callJavaScript = function(js) {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "callJavascript", [js]);
	};

    /**
     *	Use this function to set a callback which will be invoked when the ARchitect World opens an architectsdk =// url.
     *	document.location = "architectsdk =//opendetailpage?id=9";#
     *	@param onUrlInvokeCallback A function which will be called when the ARchitect World invokes a call to "document.location = architectsdk =//"
     *  @deprecated use setJSONObjectReceivedCallback instead
     */
	WikitudePlugin.prototype.setOnUrlInvokeCallback = function(onUrlInvokeCallback) {
		cordova.exec(onUrlInvokeCallback, this.onWikitudeError, "WikitudePlugin", "onUrlInvoke", [""]);
    };


	/**
	 *	Use this function to set a callback which will be invoked when AR.platform.sendJSONObject is called.
	 *	e.g.:
	 *  AR.platform.sendJSONObject({
	 *      action: "opendetailpage",
	 *      id: 9
	 *  });
	 *
	 *	@param onJSONObjectReceived A function which will be called when AR.platform.sendJSONObject is called.
	 */
	WikitudePlugin.prototype.setJSONObjectReceivedCallback = function(onJSONObjectReceived) {
		cordova.exec(onJSONObjectReceived, this.onWikitudeError, "WikitudePlugin", "onJSONObjectReceived", [""]);
	};

	/**
	 *  Use this function to inject a location into the Wikitude SDK.
	 *
	 *  @param latitude The latitude which should be simulated
	 *  @param longitude The longitude which should be simulated
	 *  @param altitude The altitude which should be simulated
	 *  @param accuracy The simulated location accuracy
	 */
	WikitudePlugin.prototype.setLocation = function(latitude, longitude, altitude, accuracy) {
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "setLocation", [latitude, longitude, altitude, accuracy]);
	};

	/**
	 *  Use this function to generate a screenshot from the current Wikitude SDK view.
	 *
     *  @param {function(ur)}  successCallback  function which is called after the screen capturing succeeded.
     *  @param {function(err)} errorCallback    function which is called after capturing the screen has failed.
	 *  @param includeWebView Indicates if the ARchitect web view should be included in the generated screenshot or not.
	 *  @param imagePathInBundleorNullForPhotoLibrary If a file path or file name is given, the generated screenshot will be saved in the application bundle. Passing null will save the photo in the device photo library.
	 */
	WikitudePlugin.prototype.captureScreen = function(successCallback, errorCallback, includeWebView, imagePathInBundleOrNullForPhotoLibrary)
    {
		cordova.exec(successCallback, errorCallback, "WikitudePlugin", "captureScreen", [includeWebView, imagePathInBundleOrNullForPhotoLibrary]);
	};

	/**
	 * Use this function to set a callback that is called every time the Wikitude SDK encounters an internal error or warning.
	 * Internal errors can occur at any time and might not be related to any WikitudePlugin function invocation.
	 * An error code and message are passed in form of a JSON object.
	 *
	 *  @param {function(jsonObject)}  errorHandler  function which is called every time the SDK encounters an internal error.
	 *
	 * NOTE: The errorHandler is currently only called by the Wikitude iOS SDK!
	 */
	WikitudePlugin.prototype.setErrorHandler = function(errorHandler)
	{
		cordova.exec(this.onWikitudeOK, errorHandler, "WikitudePlugin", "setErrorHandler", []);
	}

	/**
	 * Use this function to set a callback that is called every time the iOS SDK need to calibrate device sensors.
	 *
	 * @param {function()} startCalibrationHandler function which is called every time the iOS SDK would like to calibrate device sensors.
	 *
	 * Note: The startCalibrationHandler is currently only called by the Wikitude iOS Cordova Plugin!
	 */
	WikitudePlugin.prototype.setDeviceSensorsNeedCalibrationHandler = function(startCalibrationHandler)
	{
		cordova.exec(startCalibrationHandler, this.onWikitudeError(), "WikitudePlugin", "setDeviceSensorsNeedCalibrationHandler", []);
	}

    /**
     * Use this function to set a callback that is called every time the iOS SDK finished device sensor calibration.
     *
     * @param {function()} finishedCalibrationHandler function which is called every time the iOS SDK finished calibrating device sensors.
     *
     * Note: The finishedCalibrationHandler is currently only called by the Wikitude iOS Cordova Plugin!
     */
    WikitudePlugin.prototype.setDeviceSensorsFinishedCalibrationHandler = function(finishedCalibrationHandler)
    {
        cordova.exec(finishedCalibrationHandler, this.onWikitudeError(), "WikitudePlugin", "setDeviceSensorsFinishedCalibrationHandler", []);
    }

	/**
	 * Use this function to set a callback that is called every time the back button is pressed while the Wikitude Cordova Plugin is presented.
	 *
	 * @param {function()} onBackButtonCallback function which is called every time the Android back button is pressed.
	 *
	 * Note: The function is only implemented for Android!
	 */
	WikitudePlugin.prototype.setBackButtonCallback = function(onBackButtonCallback)
	{
	    if ( cordova.platformId == "android" ) {
	        var backButton = function(){
	            this.customBackButtonCallback = onBackButtonCallback();
	            this.onBackButton();
	            onBackButtonCallback();
	        }
	        cordova.exec(backButton, this.onWikitudeError, "WikitudePlugin", "setBackButtonCallback", []);
	    } else {
	        alert('setBackButtonCallback is only available on Android and not on' + cordova.platformId);
	    }
	}

	/**
	 *  Use this function to get information about the sdk build.
	 *
	 * @param {function} successCallback A callback which is called when the build information could be laoded.
	 */
	WikitudePlugin.prototype.getSDKBuildInformation = function(successCallback) {
	    cordova.exec(successCallback, this.onWikitudeError, "WikitudePlugin", "getSDKBuildInformation", [""])
	}

	/**
	 *  Use this function to get the version of the sdk.
	 *
	 * @param {function} successCallback A callback which is called when the sdk version could be loaded.
	 */
	WikitudePlugin.prototype.getSDKVersion = function(successCallback) {
	    cordova.exec(successCallback, this.onWikitudeError, "WikitudePlugin", "getSDKVersion", [""])
	}
	
    /**
     * Use this function to open the application specific system setting view.
     */
	WikitudePlugin.prototype.openAppSettings = function() {
    	cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "openAppSettings", []);
	}

	/*
	 *	=============================================================================================================================
	 *
	 *	Callbacks of public functions
	 *
	 *	=============================================================================================================================
	 */


	/* Lifecycle updates */
	/**
	 *	This function gets called every time the application did become active.
	 */
	WikitudePlugin.prototype.onResume = function() {

		// Call the Wikitude SDK that it should resume.
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "onResume", [""]);
	};

	/* Lifecycle updates */
	/**
	 *	This function gets called every time the application did become active.
	 */
	WikitudePlugin.prototype.onBackButton = function() {

		// Call the Wikitude SDK that it should resume.
		//cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "close", [""]);
		WikitudePlugin.prototype.close();
	};

	/**
	 *	This function gets called every time the application is about to become inactive.
	 */
	WikitudePlugin.prototype.onPause = function() {

		// Call the Wikitude SDK that the application did become inactive
		cordova.exec(this.onWikitudeOK, this.onWikitudeError, "WikitudePlugin", "onPause", [""]);
	};

	/**
	 *	A generic success callback used inside this wrapper.
	 */
	WikitudePlugin.prototype.onWikitudeOK = function() {};

	/**
	 *  A generic error callback used inside this wrapper.
	 */
	WikitudePlugin.prototype.onWikitudeError = function() {};



	/* Export a new WikitudePlugin instance */
	var wikitudePlugin = new WikitudePlugin();
	module.exports = wikitudePlugin;