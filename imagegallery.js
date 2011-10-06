var num=0;

imgArray = [
  ['images/slideshow/slide1.jpg','Jamie Barone', 'Jamie Barone (top), former world-record holder Brendan Hansen (middle) and Canadian Olympian Scott Dickens (bottom) at the 2006 Santa Clara International. (Photo courtesy of deckchange.com.)'],
  ['images/slideshow/slide2.jpg','Jamie Barone','Jamie Barone at the 2006 Santa Clara International. (Photo courtesy of deckchange.com.) '],
  ['images/slideshow/slide3.jpg','Jamie Barone','Jamie (left) and Brendan Hansen. (Photo courtesy of deckchange.com)'],
  ['images/slideshow/slide4.jpg','Jamie Barone','From left, Peter Vanderkaay, Eric Vendt, Jamie and Klete Keller. (Photo courtesy of deckchange.com)'],
  ['images/slideshow/slide5.jpg','Jamie Barone','Jamie (right) with Australian world-record holder Grant Hackett (middle) and teammate Michael Phelps (left) during a training trip to Australia in 2003.'],
  ['images/slideshow/slide6.jpg','Jamie Barone','From left: Teammates Jamie Barone, Dominic Szabo, Kevin Clements and Michael Phelps at the annual NBAC fundraiser.'],
  ['images/slideshow/slide7.jpg','Jamie Barone','NBAC Teammates at the 2002 Summer Nationals. From left: Michael Phelps, Jamie Barone and Aaron Krause.'],
  ['images/slideshow/slide8.jpg','Jamie Barone','Jamie and family at the 2004 Olympic Trials in Long Beach, Calif.'],
  ['images/slideshow/slide9.jpg','Jamie Barone','Larsen Jensen (left) and Jamie at the Greenwich Catholic pool addressing participants at the November 2008 clinic.'],
  ['images/slideshow/slide10.jpg','Jamie Barone','Two-time Olympic medalist Larsen Jensen (right) and former USC standout Sam Masson at the November 2008 clinic.']   
  ]

function slideshow(slide_num) {
  document.getElementById('mypic').src=imgArray[slide_num][0];
  document.getElementById('mypic').alt=imgArray[slide_num][1];
  document.getElementById('SScaption').innerHTML=imgArray[slide_num][2];
}

function slideshowUp() {
  num++;
  num = num % imgArray.length;
  slideshow(num);
}

function slideshowBack() {
  num--;
  if (num < 0) {num=imgArray.length-1;}
  num = num % imgArray.length;
  slideshow(num);
}
