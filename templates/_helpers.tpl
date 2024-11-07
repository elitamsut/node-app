{{- define "helloworld-expressjs.fullname" -}}
{{- .Release.Name }}-{{ .Chart.Name }}
{{- end }}
