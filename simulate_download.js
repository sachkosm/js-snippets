const downloadLog = function(logFile) {
            var blob = new Blob([logFile], { type: 'data:text/plain;charset=utf-8' });
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.target = '_blank';
            a.download = self.logFilename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(a.href);
	}
