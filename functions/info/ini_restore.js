function ini_restore (varname) {
	// http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir (http://brettz9.blogspot.com)
    // *     example 1: ini_restore('date.timezone');
    // *     returns 1: 'America/Chicago'
	if (this.php_js && this.php_js.ini) {
		this.php_js.ini[varname].local_value = this.php_js.ini[varname].global_value;
	}
}