<?php
	if (
		php_sapi_name() != "cli" ||
		$argc < 2
	) {
		exit;
	}
	
	$releasesRaw = file_get_contents("releases.json");
	$releasesArray = json_decode($releasesRaw, true);
	
	$release = $releasesArray[intval($argv[1])];
?>
<!DOCTYPE html>
<!-- AUTO GENERATED -->
<html LANG="en">
	<head>
		<title><?php print_r($release["name"]) ?> - i6340</title>
		<link rel="stylesheet" href="style.css">
		<link rel="icon" type="image/png" href="images/favicon.png">
		<link rel="apple-touch-icon" sizes="192x192" href="images/AppleTouch.png">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<a href="index.html">Go Back</a>
		<br>
		<?php
			if (isset($release["cover"])) {
				print_r(
					"<a href=\"images/covers/" . $release["cover"] . "\">\n" .
					"\t\t\t<img class=\"border container\" src=\"images/covers/" .
					$release["cover"] .
					"\" alt=\"" .
					$release["name"] .
					"\" width=\"256\" height=\"256\">\n" .
					"\t\t</a>\n"
				);
			}
			?>
		<div>
			<?php
				print_r(
					"Name: " .
					$release["name"] .
					"<br>\n" .
					"\t\t\tDate: " .
					$release["date"] .
					"<br>\n".
					"\t\t\tType: " .
					$release["type"] .
					"\n"
				);
			?>
		</div>
		<?php
			if (isset($release["trackList"])) {
				print_r(
					"<br>\n\t\t<div>Track List:</div>\n" .
					"\t\t<div class=\"border\" style=\"text-align: left;\">\n"
				);
				$i = 1;
				foreach ($release["trackList"] as $track) {
					print_r("\t\t\t$i - $track");
					if ($i < count($release["trackList"])) {
						print_r("<br>");
					}
					print_r("\n");
					$i++;
				}
				print_r("\t\t</div>\n\t\t<br>");
			}
			
			print_r("<br>\n");
			
			if (isset($release["info"])) {
				print_r("\t\t<div>Info:</div>\n\t\t<div id=\"info\" class=\"border\">\n");
				
				$i = 1;
				foreach ($release["info"] as $line) {
					print_r("$line<br>");
					if ($i < count($release["info"])) {
						print_r("\n");
					}
					$i++;
				}
				
				print_r("\n\t\t</div>\n\t\t<br><br>\n");
			}
			
			if (isset($release["links"])) {
				foreach ($release["links"] as $link) {
					print_r("\t\t<a href=\"" . $link["link"] . "\">" . $link["name"] . "</a><br>\n");
				}
			}
		?>
	</body>
</html>