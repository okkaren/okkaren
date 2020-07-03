# okkaren
Parody dating site.

## Fonts
https://includes.okccdn.com/flat/fonts/GT-America/Regular/GT-America-Regular.woff
https://includes.okccdn.com/flat/fonts/GT-America/Medium/GT-America-Medium.woff
https://includes.okccdn.com/flat/fonts/GT-America/Black/GT-America-Black.woff

## Git

```
ssh-add -K ~/.ssh/id_rsa_karen
git config --local user.name "okkaren"
git config --local user.email "okkarensite@protonmail.com"
```

https://developer.github.com/v3/guides/using-ssh-agent-forwarding/
```
ps -ef | grep -i ssh-agent
kill -HUP <ssh-agent pid>
ssh-add ~/.ssh/id_rsa_karen
ssh -T git@github.com
```

