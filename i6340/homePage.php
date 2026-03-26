<!DOCTYPE html>
<!-- AUTO GENERATED -->
<html LANG="en">
	<head>
		<title>i6340</title>
		<link rel="stylesheet" href="style.css">
		<link rel="icon" type="image/png" href="images/favicon.png">
		<link rel="apple-touch-icon" sizes="192x192" href="images/appleTouch.png">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>
	<body>
		<img src="images/logo2x.png" alt="Logo" class="border">
		<br><br>
		<div>
			Pronounced: Eye-Sixty-Three-Forty<br>
			<br>
			Music alias of <a href="../">StevenSYS</a>.<br>
			<br>
			Anything I make using the name "i6340" is<br>
			licensed as <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a> unless specified otherwise.
		</div>
		<br><?php
			$releasesRaw = file_get_contents("releases.json");
			$releasesArray = json_decode($releasesRaw, true);
			
			foreach (array_reverse($releasesArray) as $release) {
				print_r("\n\t\t");
				
				if ($release["disableLink"]) {
					print_r("<div class=\"release border\">\n");
				} else {
					print_r("<a class=\"release border\" href=\"" . $release["page"] . "\">\n");
				}
				
				if (isset($release["cover"])) {
					print_r(
						"\t\t\t<img id=\"cover\" src=\"images/covers/" .
						$release["cover"] .
						"\" alt=\"" .
						$release["name"] .
						"\" width=\"128\" height=\"128\">\n"
					);
				}
				
				print_r("\t\t\t<div style=\"float: right;\">\n");
				
				print_r(
					"\t\t\t\tName: " .
					$release["name"] .
					"<br>\n" .
					"\t\t\t\tDate: " .
					$release["date"] .
					"<br>\n" .
					"\t\t\t\tType: " .
					$release["type"] .
					"\t\t\t"
				);
				
				print_r("\n\t\t\t</div>\n\t\t");
				
				if ($release["disableLink"]) {
					print_r("</div>");
				} else {
					print_r("</a>");
				}
				
				print_r("\n\t\t<br>");
			}
			print_r("\n");
		?>
		<div>
			My accounts:<br>
			<a href="https://youtube.com/@i6340-music" style="color: #FF8080;">YouTube</a><br>
		</div>
	</body>
</html>