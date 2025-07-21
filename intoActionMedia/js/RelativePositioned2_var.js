 /***********************************************************************************************/
	var NoOffFirstLineMenus=11;			// Number of main menu  items
						// Colorvariables:
						// Color variables take HTML predefined color names or "#rrggbb" strings
						//For transparency make colors and border color ""
	var LowBgColor="#000";			// Background color when mouse is not over
	var HighBgColor="#000";			// Background color when mouse is over
	var FontLowColor="#fff";			// Font color when mouse is not over
	var FontHighColor="#fff";			// Font color when mouse is over
	var BorderColor="#000";			// Border color
	var BorderWidthMain=1;			// Border width main items
	var BorderWidthSub=1;			// Border width sub items
 	var BorderBtwnMain=1;			// Border width between elements main items
	var BorderBtwnSub=1;			// Border width between elements sub items
	var FontFamily="verdana,helvetica,arial,univers";	// Font family menu items
	var FontSize=11;				// Font size menu items
	var FontBold=0;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered="Left";		// Item text position left, center or right
	var MenuCentered="left";			// Menu horizontal position can be: left, center, right
	var MenuVerticalCentered="top";		// Menu vertical position top, middle,bottom or static
	var ChildOverlap=0;			// horizontal overlap child/ parent
	var ChildVerticalOverlap=0.0625;			// vertical overlap child/ parent
	var StartTop=0;				// Menu offset x coordinate
	var StartLeft=0;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var DistFrmFrameBrdr=0;			// Distance between main menu and frame border
	var LeftPaddng=4;				// Left padding
	var TopPaddng=4;				// Top padding. If set to -1 text is vertically centered
	var FirstLineHorizontal=1;			// Number defines to which level the menu must unfold horizontal; 0 is all vertical
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var UnfoldDelay=100;			// delay before sub unfolds	
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame="";			// Frame where first level appears
	var SecLineFrame="";			// Frame where sub levels appear
	var DocTargetFrame="";			// Frame where target documents appear
	var TargetLoc="MenuPos";			// span id for relative positioning
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var BottomUp=0;				// enables/ disables Bottom up unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var BaseHref="";				// BaseHref lets you specify the root directory for relative links. 
						// The script precedes your relative links with BaseHref
						// For instance: 
						// when your BaseHref= "http://www.MyDomain/" and a link in the menu is "subdir/MyFile.htm",
						// the script renders to: "http://www.MyDomain/subdir/MyFile.htm"
						// Can also be used when you use images in the textfields of the menu
						// "MenuX=new Array("<img src=\""+BaseHref+"MyImage\">"
						// For testing on your harddisk use syntax like: BaseHref="file:///C|/MyFiles/Homepage/"

	var Arrws=[BaseHref+"../images/tri.gif",5,10,BaseHref+"../images/tridown.gif",10,5,BaseHref+"../images/trileft.gif",5,10,BaseHref+"triup.gif",10,5];

						// Arrow source, width and height.
						// If arrow images are not needed keep source ""

	var MenuUsesFrames=0;			// MenuUsesFrames is only 0 when Main menu, submenus,
						// document targets and script are in the same frame.
						// In all other cases it must be 1

	var RememberStatus=0;			// RememberStatus: When set to 1, menu unfolds to the presetted menu item. 
						// When set to 2 only the relevant main item stays highligthed
						// The preset is done by setting a variable in the head section of the target document.
						// <head>
						//	<script type="text/javascript">var SetMenu="2_2_1";</script>
						// </head>
						// 2_2_1 represents the menu item Menu2_2_1=new Array(.......

	var BuildOnDemand=0;			// 1/0 When set to 1 the sub menus are build when the parent is moused over
	var BgImgLeftOffset=5;			// Only relevant when bg image is used as rollover
	var ScaleMenu=0;				// 1/0 When set to 0 Menu scales with browser text size setting
	var OverFormElements=0;			// Set this to 0 when the menu does not need to cover form elements.

	var HooverBold=0;				// 1 or 0
	var HooverItalic=0;				// 1 or 0
	var HooverUnderLine=0;			// 1 or 0
	var HooverTextSize=0;			// 0=off, number is font size difference on hoover
	var HooverVariant=0;			// 1 or 0

						// Below some pretty useless effects, since only IE6+ supports them
						// I provided 3 effects: MenuSlide, MenuShadow and MenuOpacity
						// If you don't need MenuSlide just leave in the line var MenuSlide="";
						// delete the other MenuSlide statements
						// In general leave the MenuSlide you need in and delete the others.
						// Above is also valid for MenuShadow and MenuOpacity
						// You can also use other effects by specifying another filter for MenuShadow and MenuOpacity.
						// You can add more filters by concanating the strings
	var MenuSlide="";
	

	var MenuShadow="";

	var MenuOpacity="";

	function BeforeStart(){return}
	function AfterBuild(){return}
	function BeforeFirstOpen(){return}
	function AfterCloseAll(){return}

// Menu tree:
// MenuX=new Array("ItemText","Link","background image",number of sub elements,height,width,"bgcolor","bghighcolor",
//	"fontcolor","fonthighcolor","bordercolor","fontfamily",fontsize,fontbold,fontitalic,"textalign","statustext");
// Color and font variables defined in the menu tree take precedence over the global variables
// Fontsize, fontbold and fontitalic are ignored when set to -1.
// For rollover images ItemText or background image format is:  "rollover?"+BaseHref+"Image1.jpg?"+BaseHref+"Image2.jpg" 
Menu1=new Array("","index.html","../images/pg2nav_bkgnd01.gif",0,22,5,"","","","","","",-1,-1,-1,"","");
Menu2=new Array("Home","index.html","../images/pg2nav_bkgnd01.gif",0,22,51,"","","","","","",-1,-1,-1,"","");
	
Menu3=new Array("About Us","","../images/pg2nav_bkgnd02.gif",4,22,79,"","","","","","",-1,-1,-1,"","");
	Menu3_1=new Array("Company Profile","profile.html","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu3_2=new Array("Company History","history.html","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu3_3=new Array("Environmental Policy","#","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu3_4=new Array("Contact","contact.html","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
		
Menu4=new Array("Film","","../images/pg2nav_bkgnd03.gif",6,22,45,"","","","","","",-1,-1,-1,"","");
	Menu4_1=new Array("About","film_about.html","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu4_2=new Array("Shots","#","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu4_3=new Array("Albums","#","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu4_4=new Array("Detailed Story","#","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu4_5=new Array("Review","#","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");
	Menu4_6=new Array("Press Release","#","",0,22,135,"#fff","#ccc","#000","#000","#000","",-1,-1,-1,"","");

Menu5=new Array("Video","video.html","../images/pg2nav_bkgnd04.gif",0,22,63,"","","","","","",-1,-1,-1,"","");

Menu6=new Array("Web","web.html","../images/pg2nav_bkgnd05.gif",0,22,56,"","","","","","",-1,-1,-1,"","");
	
Menu7=new Array("Products","products.html","",0,22,83,"","","","","#999999","",-1,-1,-1,"","");

Menu8=new Array("Need for Media","needs.html","",0,22,120,"","","","","#999999","",-1,-1,-1,"","");

Menu9=new Array("Cross Over Films","Cross_Over_Films.html","",0,22,133,"","","","","#999999","",-1,-1,-1,"","");

Menu10=new Array("News","news.html","",0,22,55,"","","","","#999999","",-1,-1,-1,"","");

Menu11=new Array("Careers","Careers.html","",0,22,55,"","","","","#999999","",-1,-1,-1,"","");
