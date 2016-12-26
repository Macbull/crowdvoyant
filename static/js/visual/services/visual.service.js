/**
* Visual
* @namespace crowdsource.visual.services
*/
(function () {
	'use strict';

	angular
	.module('crowdsource.visual.services')
	.factory('Visual', Visual);

	Visual.$inject = ['$cookies', '$http', '$q', '$location', 'HttpService'];

	/**
	* @namespace
	* @returns {Factory}
	*/

	function Visual($cookies, $http, $q, $location, HttpService) {
		var Visual = {
      getAllStories: getAllStories,
      getStories: getStories,
			getStory: getStory,
      getArticles: getArticles,
      getArticle: getArticle,
      getImages: getImages,
			saveMeme: saveMeme
		};

		return Visual;

		function getAllStories() {

			var settings = {
				url: '/api/story/',
				method: 'GET'
			};
			return HttpService.doRequest(settings);
		}

		function getStories(subs_id) {

			var settings = {
				url: '/api/'+subs_id+'/stories/',
				method: 'GET'
			};
			return HttpService.doRequest(settings);
		}

		function getStory(story_id) {

			var settings = {
				url: '/api/story/'+story_id+'/',
				method: 'GET'
			};
			return HttpService.doRequest(settings);
		}

		function getArticles(story_id) {

			var settings = {
				url: '/api/story/'+story_id+'/articles/',
				method: 'GET'
			};
			return HttpService.doRequest(settings);

		}

    function getArticle(article_id) {

			var settings = {
				url: '/api/article/'+article_id+'/',
				method: 'GET'
			};
			return HttpService.doRequest(settings);

		}

    function getImages(article_id) {

      var settings = {
        url: '/api/article/'+article_id+'/images/',
        method: 'GET'
      };
      return HttpService.doRequest(settings);

    }

		function saveMeme(data) {
			var blob = new Blob([data.image], {type: 'image/png'});
			var file = new File([blob], 'imageFileName.png');
			console.log(file)
			var fd = new FormData();
	    fd.append('file', file);
			fd.append('story', data.story);
			fd.append('description', data.description);
			fd.append('image1', data.image1);
			fd.append('image2', data.image2);
			fd.append('user', data.user);
			fd.append('bottomCaption', data.bottomCaption);
			fd.append('topCaption', data.topCaption);
			var settings = {
				url: '/api/meme/',
				method: 'POST',
				data: fd,
				headers: {'Content-Type': undefined}
			};
			return HttpService.doRequest(settings);

    }


	}

})();
