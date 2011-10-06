<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
 <link href="stylesheet.css" rel="stylesheet" type="text/css" /> 
   <link rel="icon" href="images/favicon.jpg" type="image/jpg" />
   <script type="text/javascript">
<!--
var image1=new Image()
image1.src="images/slideshow/slide1.jpg"
var image2=new Image()
image2.src="images/slideshow/slide2.jpg"
var image3=new Image()
image3.src="images/slideshow/slide3.jpg"
var image4=new Image()
image4.src="images/slideshow/slide4.jpg"
var image5=new Image()
image5.src="images/slideshow/slide5.jpg"
var image6=new Image()
image6.src="images/slideshow/slide6.jpg"
var image7=new Image()
image7.src="images/slideshow/slide7.jpg"
var image8=new Image()
image8.src="images/slideshow/slide8.jpg"
var image9=new Image()
image9.src="images/slideshow/slide9.jpg"
var image10=new Image()
image10.src="images/slideshow/slide10.jpg"
//-->
</script>
<title>StrokeConsultant.com - Photos</title>
</head>
<body>
<div id="container">
	<div id="header">
	</div>
	<div id="center">
	<div id="nav"><?php include("nav.inc.php"); ?>
	</div>
	
	<div id="main"><div id="slideshow"><img src="images/slideshow/slide1.jpg" name="slide" width="" height="" />
<script>
<!--
//variable that will increment through the images
var step=1
function slideit(){
//if browser does not support the image object, exit.
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if (step<10)
step++
else
step=1
//call function "slideit()" every 2.5 seconds
setTimeout("slideit()",2500)
}
slideit()
//-->
</script>
</div>
<!--end of slideshow-->
	</div>
	<!--end of main-->
	<br />
<br /></div>
	<!--end of center-->
	<!--start of footer-->
	<div id="footer"><?php include("footer.inc.php"); ?></div>
	<!--end of footer-->
</div>
<!--end of container-->
 </body> </html> 