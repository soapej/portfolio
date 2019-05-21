$(document).ready(function() {

	setTimeout(function(){
		$('.screen-overlay').css({
			opacity: 0
		});
	}, 300);
	setTimeout(function(){
		$('.screen-overlay').css({
			height: 0
		});
	}, 1000);


	function sayThanks() {
		$('.form-box').html("<p>Thanks, y'all!</p>");
	}



	$('.message__close').click(hideMessageBox);


	setTimeout(function(){
		$('.message__icon').css({
			'transform': 'translateY(0) rotate(0deg)'
	}).click(showMessageBox);
}, 1000);

setTimeout(function(){
	$('.dot').each(function(i){
		setTimeout(function(){
			$('.dot').eq(i).css('transform', 'translateY(0)');
		}, 250 * (i+1));
	});
	$('.dot-1').addClass('active');
}, 1500);


	function hideMessageBox() {
		$('.message__collapsible').css({
			'width': '0px',
			'height': '0px',
			'opacity': 0
		});
		$('.message__icon').css({
			'opacity': 1,
			'font-size': '40pt'
	});
	}

	function showMessageBox() {
		$('.message__collapsible').css({
			'width': '350px',
			'height': '400px',
			'opacity': 1
		});
		$('.message__icon').css({
			'opacity': 0,
			'font-size': 0
	});
};

		// Portfolio


//  show overlay
$('.showcase-block').click(function(){
	$('.showcase-overlay').css({
		opacity: 1,
		height: '110vh',
		top: '15%'
	});
});
// 	hide overlay
$('.showcase-overlay').click(function(){
	$('.showcase-overlay').css({
		opacity: 0,
		height: 0,
		top: '50%'
	})
});
$('.silk-block').click(function(){
	$('.showcase-overlay img').attr('src', '/img/silken-composite.png');
	$('.overlay-text').html(silkText);
});
$('.gts-block').click(function(){
	$('.showcase-overlay img').attr('src', '/img/gts-composite.png');
	$('.overlay-text').html(gtsText);
});
$('.productivity-block').click(function(){
	$('.showcase-overlay img').attr('src', '/img/productivity.png');
	$('.overlay-text').html(productivityText);
});
$('.alp-blog-block').click(function(){
	$('.showcase-overlay img').attr('src', '/img/alp-blog.png');
	$('.overlay-text').html(alpBlogText);
});
$('.alp-cms-block').click(function(){
	$('.showcase-overlay img').attr('src', '/img/alp-cms.png');
	$('.overlay-text').html(alpCmsText);
});
$('.alp-data-block').click(function(){
	$('.showcase-overlay img').attr('src', '/img/alp-data.png');
	$('.overlay-text').html(alpDataText);
});
$('.alp-form-block').click(function(){
	$('.showcase-overlay img').attr('src', '/img/alp-form.png');
	$('.overlay-text').html(alpFormText);
});



var silkText = "<p class='caption-title'>Silken Strands Clothing (2016)</p><p>Silken Strands gave me the honor of launching their entire web presence, which included building a website storefront, putting together several social media accounts, and dabbling with the logo design.</p>";

var gtsText = "<p class='caption-title'>Give Through Service (2017)</p><p>GTS wanted an easy way to collect community input for charity drives and publish pictures of their progress.</p><p>To keep site maintenance to a minimum, the photo gallery with captions is synced to the charity's Instagram account.</p>";

var productivityText = "<p class='caption-title'>Productivity Tools (2017-18)</p><p>The To Do app - done in true Sticky Note fashion - was a way to practice PHP, SQL, and jQueryUI with persistent note placement.</p><p>My Command Center - done in over-the-top Sci-Fi fashion - serves as a personal new tab landing page that conveniently organizes my bookmarks and displays weather conditions.</p>";

var alpBlogText = "<p class='caption-title'>Alpine Achievement Systems - Blog (2017-18)</p><p>Built the company blog, which featured social media sharing, keyword search, and filtering options (date, popularity, etc.).</p>";

var alpCmsText = "<p class='caption-title'>Alpine Achievement Systems - Blog CMS (2017-18)</p><p>Played an integral part in building the CMS for the company blog using PHP and MySQL.</p>";

var alpDataText = "<p class='caption-title'>Alpine Achievement Systems - PDF Datasheets (2017)</p><p>Updated and redesigned PDF datasheets using Adobe Illustrator and InDesign</p>";

var alpFormText = "<p class='caption-title'>Alpine Achievement Systems (2017-18)</p><p>Designed intuitive sign-up forms with progress indicators and front-end validation.</p><p>Built tables with sort and filter functionality along with the ability to export to various file types (xlsx, csv, txt, etc.).</p>";






// Skills Card
$('.backend-title').click(function(){
	if ($('.frontend .active-end')) {
		$('.card-content').css({
			'box-shadow': '0 0 30px #9fd356',
			'transform': 'rotateY( 180deg )',
			'transition': 'transform 0.5s'
		});
		$('.skill-buttons').css('box-shadow', '0 0 20px #9fd356');
		$('.frontend').removeClass('active-end');
		$('.backend').addClass('active-end');
	}
});
$('.frontend-title').click(function(){
	if ($('.backend .active-end')) {
		$('.card-content').css({
			'box-shadow': '0 0 20px #4ecdc4',
			'transform': 'rotateY( 0deg )',
			'transition': 'transform 0.5s'
		});
		$('.skill-buttons').css('box-shadow', '0 0 20px #4ecdc4');
		$('.backend').removeClass('active-end');
		$('.frontend').addClass('active-end');
	}
});



});
