# okkaren

[Parody dating site.](https://okkaren.github.io/okkaren/)

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
