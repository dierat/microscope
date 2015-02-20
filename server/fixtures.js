if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Meteor',
		url: 'http://sachagreif.com/instroducing-telescope'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com'
	});

	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	});
}