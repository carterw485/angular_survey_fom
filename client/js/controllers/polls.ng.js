myApp

.controller('PollsController', function(PollFactory, $location){
	var that = this;
	if(!this.user){$location.path('/')}
	this.login = function(user){
		if(!this.user){return}
		else{$location.path('/dashboard')}
	};
	this.logout = function(){
		this.user = null;
		$location.path('/');
	}
	this.getPolls = function(){
		PollFactory.getPolls(function(allPolls){
			that.polls = allPolls;
		});

	};
	this.getPolls();
	this.showPoll = function(id){
		PollFactory.showPoll(id ,function(poll){
			that.poll = poll;			
			$location.path('/poll/'+poll._id);
		});
	};
	PollFactory.newthing();
	this.vote = function(ans){
		PollFactory.vote(ans);
		that.showPoll(that.poll._id);
	};
	this.newPoll = {};
	this.newPoll.options = [];
	this.errors = [];
	this.createPoll = function(newPoll){
		this.errors = [];
		if(!newPoll.title){
			this.errors.push('Question field is required');
		}
		else if(newPoll.title.length < 8){
			this.errors.push('Question field must be atleast 8 characters');
		};
		if(!newPoll.options[0] || !newPoll.options[1] || !newPoll.options[2] || !newPoll.options[3]){
			this.errors.push('All option fields are required');
		}
		else if(newPoll.options[0].answer.length < 3 || newPoll.options[1].answer.length < 3 || newPoll.options[2].answer.length < 3 || newPoll.options[3].answer.length < 3){
			this.errors.push('Option fields must be atleast 3 characters');
		}
		if(this.errors.length > 0){
			console.log('we have errors');
			return false;
		}

		for(var i=0 ; i<4 ; i++){
			newPoll.options[i].votes = 0;
		}
		newPoll.created_by = this.user;
		console.log(newPoll);
		PollFactory.addPoll(newPoll, function(data){
			console.log(data);
		});
		that.newPoll = {};
		that.newPoll.options = [];
		$location.path('/dashboard');
		this.getPolls();
	};
	this.removePoll = function(id){
		PollFactory.removePoll(id, function(ok){
			console.log(ok);
			that.getPolls();
		});
	};
});