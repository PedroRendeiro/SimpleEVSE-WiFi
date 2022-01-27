const lang_de = {
    g_password : "Passwort",
    g_login : "Einloggen",
    g_evse_control : "Steuerung",
    g_users : "Benutzer",
    g_settings : "Einstellungen",
    g_status : "Status",
    g_timer : "Timer",
    g_log : "Log",
    g_syslog : "System-Log",
    g_save : "Speichern",
    g_abort : "Abbrechen",
    g_no_results : "Keine Einträge",
    g_update : "Update",
	g_ok : "OK",
	g_show : "Anzeigen",
    g_hide : "Ausblenden",
	g_refresh : "Aktualisieren",
	g_confirm_conn_lost : "Verbindung zu EVSE-WiFi unterbrochen. Seite neu laden?",

    ec_max_current : "Maximaler Ladestrom",
    ec_power : "Leistung",
    ec_duration : "Dauer",
    ec_energy : "Energie",
    ec_charged_mileage : "Geladene Reichweite",
    ec_current : "Ladestrom",
    ec_activate : "Ladevorgang Starten",
    ec_deactivate : "Ladevorgang Beenden",
    ec_remote_connected : "Remote System verbunden",
    ec_remote_disconnected : "<strong>Warnung!</strong> Der Ladevorgang wurde unterbrochen, da keine Verbidung zum Remote System besteht.",
    ec_remote_curr_dis : "Die Manuelle Änderung des Ladestroms ist im Remote Modus deaktiviert",
    ec_ready : "Bereit",
    ec_connected : "Fahrzeug angeschlossen",
    ec_charging : "Fahrzeug lädt...",
    ec_error : "Modbus Fehler!",

    us_head : "Hinterlege einen neuen Benutzer, indem du ein RFID Tag einliest oder klicke auf \"Neuer Benutzer\".",
    us_uid : "UID",
    us_user_name_label : "Benutzername",
    us_access_type : "Zugriffstyp",
	us_active : "Aktiv",
	us_disabled : "Deaktiviert",
    us_valid_until : "Gültig bis",
    us_new_user : "Neuer Benutzer",
	us_edit_user : "Benutzer Bearbeiten",
    us_edit_users : "Benutzer Bearbeiten",
    us_add_user : "Benutzer hinzufügen",
	us_add_new_user : "Einen neuen Benutzer hinzufügen",
    us_edit_user : "Benutzer Bearbeiten",
	us_remove_user_t : "Soll Benutzer {0} : {1} wirklich aus der Datenbank gelöscht werden?",
	us_all : "Alle",
	us_search : "Suchen",

    se_save_reboot : "Speichern & Neustarten",
    se_head : "<strong>Achtung!</strong> Geänderte Einstellungen werden erst nach einem Neustart übernommen.",
    se_wifi_settings : "WLAN-Einstellungen",
    se_wifi_settings_desc : "Gib deinen WLAN-Namen ein oder klicke auf \"Scan\", um ein WLAN-Netzwerk in der Umgebung auszuwählen.",
    se_wifi_mode : "WLAN-Modus",
    se_wifi_mode_tt : "Du kannst EVSE-WiFi entweder als neues Gerät in dein vorhandenes WLAN einbinden (Client) oder EVSE-WiFi erstellt ein eigenes WLAN (Access Point).",
    se_wifi_mode_a : "Access Point",
    se_wifi_mode_c : "Client",
    se_wifi_ssid : "SSID",
    se_wifi_scan : "Scan",
    se_wifi_rescan : "Re-Scan",
    se_wifi_ssid_tt : "Name des WLAN Netzwerks",
    se_wifi_bssid : "BSSID",
    se_wifi_bssid_tt : "Wenn du mehrere WLANs mit der gleichen SSID hast (z.B. über einen Repeater), kannst du über die BSSID einen spezifischen Access Point auswählen.",
    se_wifi_password : "Passwort",
    se_wifi_password_tt : "WLAN Passwort - mindestens 8 Zeichen",
    se_wifi_use_static_ip : "Statische IP-Adresse verwenden",
    se_wifi_use_static_ip_tt : "Vergib eine statische IP Adresse (ohne DHCP)",
    se_wifi_ip_address : "IP Adresse",
    se_wifi_subnet : "Subnetzmaske",
    se_wifi_gateway : "Gateway",
    se_wifi_dns_server : "DNS-Server",
    se_rfid_hw_settings : "RFID-Hardware Einstellungen",
    se_rfid_use : "RFID-Reader aktivieren",
    se_rfid_use_tt : "Ladevorgänge können über einen RC522 RFID-Reader gestartet und beendet werden.",
    se_rfid_gain : "RFID Leistung",
    se_rfid_gain_tt : "Je höher dieser Wert ist, desto stärker ist der Empfang der RFID-Antenne.",
    se_meter_settings : "Zähler-Einstellungen",
    se_meter_use : "Stromzähler aktivieren",
    se_meter_use_tt : "Wenn ein Stromzähler verbaut ist, können die gemessene Energie und Leistung ausgewertet werden.",
    se_meter_type : "Stromzähler Typ",
    se_meter_type_tt : "Wähle, ob der verwendete Stromzähler per S0 oder RS485 Modbus angesteuert werden soll.",
    se_meter_phases : "Stromzähler Phasen",
    se_meter_phases_tt : "Wähle aus, wie viele Phasen dein Stromzähler verwendet",
    se_meter_imps : "Impulse/kWh",
    se_meter_imps_tt : "Wähle, wie viele Impulse dein Stromzähler schickt, um eine kWh abzubilden (gewöhnlich 400 - 2000 Impulse pro kWh)",
    se_meter_imp_len : "Impulslänge",
    se_meter_imp_len_tt : "Wähle die Impulslänge, die dein Stromzähler ausgibt. Standard: 30ms",
    se_meter_factor : "Faktor",
    se_meter_factor_tt : "Gib einen Faktor an, mit dem die gemessene Energie/Leistung multipliziert werden soll (bei Verwendung eines einphasigen Stromzähler, wenn ein zwei- oder dreiphasig ladendes Fahrzeug geladen wird). Wähle '1', wenn du keinen Faktor benötigst.",
    se_meter_price : "Preis",
    se_meter_price_tt : "Preis in ct/kwh",
	se_meter_type_s0 : "S0-Zähler",
	se_meter_1phase : "1-phasig",
	se_meter_3phase : "3-phasig",
	se_meter_factor_1 : "Faktor 1 (kein Faktor)",
	se_meter_factor_2 : "Faktor 2",
	se_meter_factor_3 : "Faktor 3",
    se_evse_settings : "EVSE Einstellungen",
    se_evse_max_current : "Maximaler Ladestrom",
    se_evse_max_current_tt : "Gib den maximal verfügbaren Ladestrom an, um den Slider auf der Seite 'Steuerung' zu limitieren.",
    se_evse_use_button : "Taster aktivieren",
    se_evse_use_button_tt : "Verwende einen Taster, um einen Ladevorgang zu starten/stoppen.",
    se_evse_op_mode : "Betriebs-modus",
    se_evse_op_mode_tt : "Wähle einen Betriebsmodus aus.",
    se_evse_op_normal : "Normal Modus",
    se_evse_op_normal_tt : "Normal Modus: Manuelles Starten/Stoppen via RFID, Taster, etc. (verwendet EVSE Register 1000/2005)",
    se_evse_op_aa : "Always Active Modus",
    se_evse_op_aa_tt : "Always Active Modus: Automatisches Starten/Stoppen - keine Freischaltung per RFID/Taster nötig, um einen Ladevorgang zu starten/stoppen (verwendet EVSE Register 1000)",
    se_evse_op_remote : "Remote Controlled",
    se_evse_op_remote_tt : "Remote Controlled: empfohlen für die Verwendung mit openWB/EVCC/etc. - (verwendet EVSE Register 1000)",
    se_evse_api : "API aktivieren",
    se_evse_api_tt : "Aktiviert die REST-API (http)",
    se_evse_rst_after_charge : "Ladestrom automatisch Zurücksetzen",
    se_evse_rst_after_charge_tt : "Setzt den Ladestrom nach jedem Ladevorgang automatisch wieder auf den Wert aus EVSE Register 2000 (Amps after boot).",
    se_evse_cp_int : "CP-Unterbrechung",
	se_evse_cp_int_b : "CP-Signal manuell unterbrechen",
    se_evse_cp_int_tt : "Manuelle CP-Unterbrechung auslösen (3 Sekunden)",
    se_evse_use_rse : "RSE-Hardware aktivieren",
    se_evse_use_rse_tt : "Aktiviert den RSE-Pin (Rundsteuerempfänger), um mit einem externen Gerät durch einen potentialfreien Kontakt den Ladestrom zu drosseln.",
    se_evse_rse_val : "RSE-Wert",
    se_evse_rse_val_tt : "Ladestrom bei RSE-Auslösung in Abhängigkeit des aktuell konfigurierten Ladestroms (%)",
    se_car_settings : "Fahrzeug-Einstellungen",
    se_car_avg_consumption : "Verbrauch",
    se_car_avg_consumption_tt : "Durchschnittsverbrauch deines Fahrzeugs in kWh/100km",
    se_gen_settings : "Allgemeine Einstellungen",
    se_gen_adm_pw : "Admin Passwort",
    se_gen_adm_pw_tt : "Passwort für den Admin Login.",
    se_gen_adm_pw2 : "Admin Passwort bestätigen",
    se_gen_adm_pw2_tt : "Bestätige das Admin Passwort.",
    se_gen_host : "Hostname",
    se_gen_host_tt : "Netzwerk-Hostname - Ein Zugriff auf diese Weboberfläche ist über http://hostname.local möglich.",
    se_gen_led : "LED-Konfiguration",
    se_gen_led_tt : "Wähle eine LED Konfiguration.",
	se_gen_led_0 : "LED Deaktiviert",
	se_gen_led_1 : "Heartbeat und RFID Feedback",
	se_gen_led_2 : "Heartbeat, RFID Feedback und EVSE Status",
    se_gen_dsp_rot : "Display-Ausrichtung",
    se_gen_dsp_on_time : "Display Standby",
    se_gen_dsp_on_time_tt : "Zeit, bis das Display in den Standby-Modus geht.",
    se_gen_lang : "Sprache",
    se_gen_debug : "Debug Modus",
    se_gen_safari : "Safari Modus",
    se_gen_safari_tt : "Deaktiviert BasicAuthentication für Websocket-Verbindungen, um den Zugriff über den Safari-Browser zu ermöglichen. Aktiviere diese Funktion nur, wenn sie benötigt wird.",
    se_gen_log : "Logging aktivieren",
	se_gen_log_tt : "Aktiviert das Logging für Ladevorgänge.",
    se_gen_download_syslog : "Syslog Herunterladen",
    se_ntp_settings : "Zeit- und Ortseinstellungen",
    se_ntp_server : "NTP-Server",
    se_ntp_server_tt : "Wähle einen NTP Server (empfohlen: de.pool.ntp.org) aus.",
    se_ntp_desc : "Kleine Abweichungen zwischen Orts- und Gerätezeit können ignoriert werden",
    se_ntp_dev_time : "Gerätezeit",
    se_ntp_browser_time : "Ortszeit",
    se_ntp_sync : "Synchronisiere Uhrzeit",
    se_ntp_sync_tt : "Synchronisert die Ortszeit mit der Uhrzeit von EVSE-WiFi - hilfreich, wenn EVSE-WiFi über keinen Internetzugriff verfügt",
    se_ntp_tz : "Zeitzone",
    se_ntp_dst : "Sommerzeit",
    se_ntp_dst_tt : "Aktiviert die Sommerzeit (+1 Stunde)",
    se_bot_back : "Sicherung",
    se_bot_back_desc : "Bitte stelle sicher, dass du vor einem Update deine Einstellungen und Benutzer sicherst!",
    se_bot_back_user : "Benutzerdaten Sichern",
    se_bot_back_set : "Einstellungen Sichern",
    se_bot_rest : "Wiederherstellen",
    se_bot_rest_desc : "Klicke auf den entsprechenden Link und wähle deine Sicherungsdatei aus.",
    se_bot_rest_user : "Benutzerdaten Wiederherstellen",
    se_bot_rest_set : "Einstellungen Wiederherstellen",
	se_bot_rest_wait_ud : "Benutzerdaten werden wiederhergestellt...",
    se_bot_reset : "Zurücksetzen",
    se_bot_reset_desc : "Was soll zurückgesetzt werden?",
    se_bot_reset_log : "Log File zurücksetzen",
    se_bot_reset_user : "Benutzerdaten Zurücksetzen",
    se_bot_factory_reset : "Zurücksetzen auf Werkseinstellungen",
    se_bot_supp : "Unterstütze dieses Projekt",
    se_bot_supp_desc : "Die Entwicklung von EVSE-WiFi ist sehr zeitaufwändig. Die Community und wir haben noch viele Ideen. Wenn du dieses Projekt unterstützen möchtest, freuen wir uns über eine Spende.",
    se_bot_donate : "Jetzt Spenden!",
    se_bot_upd : "Firmware Update",
    se_bot_upd_chk : "Nach Updates suchen",
    se_bot_upd_fw : "Aktuelle Firmware Version",
    se_bot_upd_conf : "Aktuelle Config Version",
    se_bot_download : "Firmware Downloads",
    se_bot_upload : "Hochladen",
    se_upd_head: "Firmware auswählen ",
    se_upd_curr_fw : "Aktuelle Firmware Version",
    se_upd_sh_beta : "Beta-Versionen anzeigen",
    se_upd_sel_fw : "Version Auswählen",
    se_upd_desc_fw : "Beschreibung",
	se_alert_no_file_restore : "Keine Datei für die Wiederherstellung ausgewählt",
	se_alert_no_valid_backup : "Keine gültige Backup-Datei",	
	se_alert_logfile_reset : "Log File zurückgesetzt!",
	se_alert_user_reset : "Benutzerdaten zurückgesetzt!",
	se_alert_aborted : "Abgebrochen!",
	se_alert_factory_restored : "Werkseinstellungen wiederhergestellt. System wird neu gestartet!",
	se_alert_admin_pw_empty : "Admin Passwort darf nicht leer sein",
	se_alert_admin_pw_char : "Admin Passwort muss mindestens 8 Zeichen lang sein",
	se_alert_admin_pw_match : "Die eingegebenen Admin Passwörter stimmen nicht überein",
	se_alert_wifi_pw_char : "Das WLAN-Passwort muss im AccessPoint-Modus mindestens 8 Zeichen lang sein oder muss leer gelassen werden (für unverschlüsselten Zugriff)",
	se_alert_reboot : "EVSE-WiFi wird nun mit den neuen Einstellungen neu gestartet",
	se_confirm_backup : "Datei ist gültig, möchtest du fortfahren?",
	se_confirm_rst_log : "Sollen wirklich alle Einträge im Ladelog gelöscht werden?",
	se_confirm_rst_user : "Sollen wirklich alle Benutzerdaten gelöscht werden?",
	se_confirm_rst_factory : "Sollen wirklich alle Benutzerdaten und Logeinträge gelöscht werden? EVSE-WiFi wird mit den Werkseinstellunge geladen! Das kann nicht rückgängig gemacht werden!",
	se_uploading : "Update wird durchgeführt...",
	se_rebooting : "System wird neu gestartet...",
	se_update_finish : "Update abgeschlossen!",
	se_update_finish_t : "Der Updateprozess ist abgeschlossen. Klicke auf 'Aktualisieren', um zum Login zu gelangen.",

	ti_head : "Timer Konfiguration",
	ti_activate :  "Timer aktivieren",
	ti_active : "aktiv",
	ti_from : "von (hh:mm)",
	ti_to : "bis (hh:mm)",
	ti_weekdays : "Wochentage",
	ti_preset_curr : "Ladestromvorgabe (A)",
	ti_mo : "Mo",
	ti_tu : "Di",
	ti_we : "Mi",
	ti_th : "Do",
	ti_fr : "Fr",
	ti_sa : "Sa",
	ti_su : "So",
	ti_saved : "Timer Konfiguration gespeichert",

    st_head : "Daten werden in {0} Sekunden aktualisiert",
    st_dev_head : "Gerät",
    st_dev_chip_id : "Chip-ID",
    st_dev_cpu_clk : "CPU-Takt",
    st_dev_uptime : "Betriebszeit",
    st_dev_dev_time : "Gerätezeit",
    st_dev_fw : "Firmware",
    st_dev_heap : "RAM",
    st_dev_flash : "Flash",
    st_dev_fs : "Dateisystem",
    st_net_head : "Netzwerk",
    st_net_ssid : "SSID",
    st_net_ip : "IP-Adresse",
    st_net_gw : "Gateway",
    st_net_subnet : "Subnetzmaske",
    st_net_dns : "DNS-Server",
    st_net_mac : "MAC-Adresse",
    st_net_host : "Hostname",
    st_evse_head : "EVSE Register",
    st_meter_head : "Stromzähler Register",
	st_meter_kwh : "Zählerstand Wirkenergie (kWh)",
	st_meter_c1 : "Strom L1 (A)",
	st_meter_c2 : "Strom L2 (A)",
	st_meter_c3 : "Strom L3  (A)",
	st_meter_v1 : "Spannung L1 (V)",
	st_meter_v2 : "Spannung L2 (V)",
	st_meter_v3 : "Spannung L3 (V)",
	st_meter_hz : "Netzfrequenz (Hz)",
    
    lo_head : "Das Logfile ist auf {0} Einträge beschränkt (FIFO-Prinzip). Aktuell befinden sich {1} Einträge im Logfile.",
    lo_date : "Datum",
    lo_duration : "Dauer",
    lo_energy : "Energie",
    lo_costs : "Kosten",
    lo_uid : "UID",
    lo_user : "Benutzer",
    lo_exp : "Export .csv",
    lo_exp_sep : "Trennzeichen",
    lo_exp_sep_tt : "Wähle ein Trennzeichen für die .csv-Datei.",
    lo_exp_sep_sc : "Semikolon (;)",
    lo_exp_sep_c : "Komma (,)",

    sl_head : "System Log",
    sl_export : "Gespeichertes System-Log herunterladen"
};

const lang_en = {
    g_password : "Password",
    g_login : "Login",
    g_evse_control : "EVSE Control",
    g_users : "Users",
    g_settings : "Settings",
    g_status : "Status",
    g_timer : "Timer",
    g_log : "Log",
    g_syslog : "System Log",
    g_save : "Save",
    g_abort : "Abort",
	g_ok : "OK",
    g_no_results : "No results",
    g_update : "Update",
	g_show : "Show",
    g_hide : "Hide",
	g_refresh : "Refresh",
	g_confirm_conn_lost : "Connection to EVSE-WiFi lost. Reload Page?",

    ec_max_current : "Max Current",
    ec_power : "Power",
    ec_duration : "Duration",
    ec_energy : "Energy",
    ec_charged_mileage : "Charged Mileage",
    ec_current : "Current",
    ec_activate : "Activate EVSE",
    ec_deactivate : "Deactivate EVSE",
    ec_remote_connected : "Remote System connected",
    ec_remote_disconnected : "<strong>Warning!</strong> Charging was canceled because there is no connection to a remote system.",
    ec_remote_curr_dis : "Manual current specification in remote mode disabled!",
    ec_ready : "Ready",
    ec_connected : "Vehicle Detected",
    ec_charging : "Charging...",
    ec_error : "Modbus Error!",

    us_head : "You can add new users by either scanning a RFID Tag or by clicking on \"New User\" button.",
    us_uid : "UID",
    us_user_name_label : "User Name or Label",
    us_access_type : "Access Type",
	us_active : "Active",
	us_disabled : "Disabled",
    us_valid_until : "Valid Until",
    us_new_user : "New User",
	us_edit_user : "Edit User",
    us_edit_users : "Edit Users",
    us_add_user : "Add User",
	us_add_new_user : "Add a new User",
    us_edit_user : "Edit User",
	us_remove_user_t : "This will remove {0} : {1} from database. Are you sure?",
	us_all : "All",
	us_search : "Search",

    se_save_reboot : "Save & Reboot",
    se_head : "<strong>Warning!</strong> Settings will take effect when the device is rebooted.",
    se_wifi_settings : "WiFi Settings",
    se_wifi_settings_desc : "Type your Wi-Fi Network's SSID or Scan for nerby Wireless Networks to join.",
    se_wifi_mode : "WiFi Mode",
    se_wifi_mode_tt : "You can run EVSE-WiFi in AP Mode or Client Mode. In client mode you will need to connect to an existing Wi-Fi network, in AP Mode EVSE-WiFi creates a Wi-Fi network itself",
    se_wifi_mode_a : "Access Point",
    se_wifi_mode_c : "Client",
    se_wifi_ssid : "SSID",
    se_wifi_scan : "Scan",
    se_wifi_rescan : "Re-Scan",
    se_wifi_ssid_tt : "WiFi Network's name",
    se_wifi_bssid : "BSSID",
    se_wifi_bssid_tt : "If you have two Wi-Fi networks with the same SSID you may want to choose the specific one by BSSID",
    se_wifi_password : "Password",
    se_wifi_password_tt : "WiFi Password - at least 8 characters",
    se_wifi_use_static_ip : "Use Static IP",
    se_wifi_use_static_ip_tt : "Use Static IP instead of DHCP",
    se_wifi_ip_address : "IP Address",
    se_wifi_subnet : "Subnet Mask",
    se_wifi_gateway : "Gateway",
    se_wifi_dns_server : "DNS Server",
    se_rfid_hw_settings : "RFID Hardware Settings",
    se_rfid_use : "Use RFID Hardware",
    se_rfid_use_tt : "Use RC522 RFID Hardware to start/stop charging",
    se_rfid_gain : "Antenna Gain",
    se_rfid_gain_tt : "Higher value means the longer RFID reader's reading distance",
    se_meter_settings : "Meter Hardware Settings",
    se_meter_use : "Use Meter Hardware",
    se_meter_use_tt : "If you want to use an electricity meter to measure energy, please activate this option",
    se_meter_type : "Type of Meter",
    se_meter_type_tt : "Choose whether you want to use an S0 meter or a modbus meter",
    se_meter_phases : "Meter Phases",
    se_meter_phases_tt : "Choose to how many phases your meter is connected",
    se_meter_imps : "Impulses",
    se_meter_imps_tt : "Depending on your meter setup, you can choose the impulses per kWh (usually 400 or 1000 imp/kWh)",
    se_meter_imp_len : "Impulse Length",
    se_meter_imp_len_tt : "Depending on your meter setup, you can choose the impulse length in milliseconds. Default: 30ms",
    se_meter_factor : "Factor",
    se_meter_factor_tt : "Specify a factor with which the measured energy is to be multiplied (e.g. when using a single-phase meter in combination with a two- or three-phase charging vehicle). Use '1' if you don't need a factor.",
    se_meter_price : "Price",
    se_meter_price_tt : "Price in ct/kwh",
	se_meter_type_s0 : "S0 Meter",
	se_meter_1phase : "1-phase",
	se_meter_3phase : "3-phase",
	se_meter_factor_1 : "Factor 1 (no factor)",
	se_meter_factor_2 : "Factor 2",
	se_meter_factor_3 : "Factor 3",
    se_evse_settings : "EVSE Settings",
    se_evse_max_current : "Max Current",
    se_evse_max_current_tt : "Enter the maximum current (A) allowed by your electical installation to limit the slider in \'EVSE Control\'.",
    se_evse_use_button : "Use Button",
    se_evse_use_button_tt : "Use a button to start/stop charging.",
    se_evse_op_mode : "Operating Mode",
    se_evse_op_mode_tt : "Select an Operating Mode",
    se_evse_op_normal : "Normal Mode",
    se_evse_op_normal_tt : "Normal Mode: Manual start/stop via RFID, Button, etc. (uses EVSE register 1000/2005)",
    se_evse_op_aa : "Always Active Mode",
    se_evse_op_aa_tt : "Always Active Mode: Automatic start/stop - no RFID/Button needed to start charging (uses EVSE register 1000)",
    se_evse_op_remote : "Remote Controlled",
    se_evse_op_remote_tt : "Remote Controlled: recommended to use with openWB/EVCC/etc. - (uses EVSE register 1000, to deactivate EVSE set current to 0)",
    se_evse_api : "Enable API",
    se_evse_api_tt : "Enables the REST-API (http)",
    se_evse_rst_after_charge : "Reset current after charge",
    se_evse_rst_after_charge_tt : "Sets the configured current to 'Amps after boot' (EVSE Reg 2000), after every charging process.",
    se_evse_cp_int : "CP interrupt",
	se_evse_cp_int_b : "Interrupt CP-Signal",
    se_evse_cp_int_tt : "Interrupt CP signal manually",
    se_evse_use_rse : "Use RSE Hardware",
    se_evse_use_rse_tt : "Use the RSE Pin to let your energy supplier control the charging current",
    se_evse_rse_val : "RSE Value",
    se_evse_rse_val_tt : "Maximum value with which the vehicle is charged when the RSE is triggered (%)",
    se_car_settings : "Car Settings",
    se_car_avg_consumption : "Average consumption",
    se_car_avg_consumption_tt : "Average energy consumption of your car (kWh/100km)",
    se_gen_settings : "General Settings",
    se_gen_adm_pw : "Admin Password",
    se_gen_adm_pw_tt : "Login password for the Administrator",
    se_gen_adm_pw2 : "Confirm Admin Password",
    se_gen_adm_pw2_tt : "Confirm Admin Password",
    se_gen_host : "Host Name",
    se_gen_host_tt : "Hostname for your charging station. If Bonjour is installed on your computer you can access EVSE-WiFi via http://hostname.local",
    se_gen_led : "LED Config",
    se_gen_led_tt : "Choose LED Configuration",
	se_gen_led_0 : "Disable LED",
	se_gen_led_1 : "Heartbeat and RFID Feedback",
	se_gen_led_2 : "Heartbeat, RFID Feedback and EVSE Status",
    se_gen_dsp_rot : "Display Rotation",
    se_gen_dsp_on_time : "Display Standby",
    se_gen_dsp_on_time_tt : "Time until the display goes to Standby mode",
    se_gen_lang : "Language",
    se_gen_debug : "Debug Mode",
    se_gen_safari : "Safari Mode",
    se_gen_safari_tt : "Disables BasicAuthentication for Websocket. This opens a security hole but is necessary when using Safari Browser.",
    se_gen_log : "Enable Logging",
	se_gen_log_tt : "Enables the logging of EV charging processes",
    se_gen_download_syslog : "Download Syslog",
    se_ntp_settings : "Time and Local Settings",
    se_ntp_server : "NTP Server",
    se_ntp_server_tt : "Choose NTP Server (recommended: pool.ntp.org)",
    se_ntp_desc : "Small differences between device time and local time can be ignored.",
    se_ntp_dev_time : "Device Time",
    se_ntp_browser_time : "Browser Time",
    se_ntp_sync : "Sync Browser Time to Device",
    se_ntp_sync_tt : "Send your device time to EVSE-WiFi, useful when EVSE-WiFi runs offline and has no connection to the internet",
    se_ntp_tz : "Timezone",
    se_ntp_dst : "Daylight Saving Time",
    se_ntp_dst_tt : "Use Daylight Saving Time (+1 hour)",
    se_bot_back : "Backup",
    se_bot_back_desc : "Please make sure that you have made a backup before updating the firmware.",
    se_bot_back_user : "Backup User Data",
    se_bot_back_set : "Backup Settings",
    se_bot_rest : "Restore",
    se_bot_rest_desc : "Click on links and choose your backup file to restore.",
    se_bot_rest_user : "Restore User Data",
    se_bot_rest_set : "Restore Settings",
	se_bot_rest_wait_ud : "Please wait while restoring user data...",
    se_bot_reset : "Reset",
    se_bot_reset_desc : "Choose the kind of reset.",
    se_bot_reset_log : "Reset Log File",
    se_bot_reset_user : "Reset User Data",
    se_bot_factory_reset : "Factory Reset",
    se_bot_supp : "Support this Project",
    se_bot_supp_desc : "The development of EVSE-WiFi is very time consuming. If you want to support this project, I would be very happy about a donation.",
    se_bot_donate : "Donate Now!",
    se_bot_upd : "Update Firmware",
    se_bot_upd_chk : "Check for Update",
    se_bot_upd_fw : "Current Firmware Version",
    se_bot_upd_conf : "Current Config Version",
    se_bot_download : "Download latest version",
    se_bot_upload : "Upload",
    se_upd_head: "Please select the firmware you want to install",
    se_upd_curr_fw : "Current Firmware Version",
    se_upd_sh_beta : "Show Beta Software",
    se_upd_sel_fw : "Select Version",
    se_upd_desc_fw : "Desription",
	se_alert_no_file_restore : "You did not select any file to restore",
	se_alert_no_valid_backup : "Not a valid backup file",
	se_alert_logfile_reset : "Log File Resetted!",
	se_alert_user_reset : "User Data Resetted!",
	se_alert_aborted : "Aborted!",
	se_alert_factory_restored : "Factory settings restored! System now should reboot with new settings.",
	se_alert_admin_pw_empty : "Administrator Password cannot be empty",
	se_alert_admin_pw_char : "Administrator Password must be at least 8 characters",
	se_alert_admin_pw_match : "Administrator Password did not match. Please confirm admin Password!",
	se_alert_wifi_pw_char : "WiFi Password in AP mode must be at least 8 characters or empty (for wifi without protection)",
	se_alert_reboot : "Device now should reboot with new settings",
	se_confirm_backup : "File seems to be valid, do you wish to continue?",
	se_confirm_rst_log : "Are you sure to reset all your charging logs?",
	se_confirm_rst_user : "Are you sure to reset all your user data?",
	se_confirm_rst_factory : "Are you sure to reset all your settings and logs? EVSE-WiFi will reboot in factory settings! This cannot be undone!",
	se_uploading : "Please wait while uploading...",
	se_rebooting : "System is rebooting...",
	se_update_finish : "Update finished!",
	se_update_finish_t : "Update process finished. Please click 'Refresh' to login.",

	ti_head : "Timer Control",
	ti_activate :  "Activate Timer",
	ti_active : "Active",
	ti_from : "From (hh:mm)",
	ti_to : "To (hh:mm)",
	ti_weekdays : "Weekdays",
	ti_preset_curr : "Preset Current (A)",
	ti_mo : "Mon",
	ti_tu : "Tue",
	ti_we : "Wed",
	ti_th : "Thu",
	ti_fr : "Fri",
	ti_sa : "Sat",
	ti_su : "Sun",
	ti_saved : "Timer settings saved",

    st_head : "Values will be refreshed in {0} seconds",
    st_dev_head : "Device",
    st_dev_chip_id : "Chip ID",
    st_dev_cpu_clk : "CPU Clock",
    st_dev_uptime : "Uptime",
    st_dev_dev_time : "Device Time",
    st_dev_fw : "Firmware",
    st_dev_heap : "Free Heap",
    st_dev_flash : "Free Flash",
    st_dev_fs : "Free File System",
    st_net_head : "Network",
    st_net_ssid : "SSID",
    st_net_ip : "IP Address",
    st_net_gw : "Gateway",
    st_net_subnet : "Subnet Mask",
    st_net_dns : "DNS Server",
    st_net_mac : "MAC Address",
    st_net_host : "Hostname",
    st_evse_head : "EVSE Registers",
    st_meter_head : "Meter Registers",
	st_meter_kwh : "Total active energy (kWh)",
	st_meter_c1 : "Current P1 (A)",
	st_meter_c2 : "Current P2 (A)",
	st_meter_c3 : "Current P3 (A)",
	st_meter_v1 : "Voltage P1 (V)",
	st_meter_v2 : "Voltage P2 (V)",
	st_meter_v3 : "Voltage P3 (V)",
	st_meter_hz : "Grid Frequency (Hz)",
	
	lo_head : "The log file is limited to {0} entries (FIFO principle). Currently {1} entries in log file.",
    lo_date : "Date",
    lo_duration : "Duration",
    lo_energy : "Energy",
    lo_costs : "Costs",
    lo_uid : "UID",
    lo_user : "User",
    lo_exp : "Export .csv",
    lo_exp_sep : "Separator",
    lo_exp_sep_tt : "Choose the separator for .csv file",
    lo_exp_sep_sc : "Semicolon (;)",
    lo_exp_sep_c : "Comma (,)",

    sl_head : "System Log",
    sl_export : "Download saved System Log"
};