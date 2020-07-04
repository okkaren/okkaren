# okkaren

[Parody dating site.](https://okkaren.github.io/okkaren/)

# Questions

- My Self Summary
- What I'm doing with my life
- I'm really good at
- The first thing people notice about me
- Favorite books, movies, shows, music, and food
- The six things I could never do without
- I spend a lot of time thinking about
- On a typical Friday night I am
- The most private thing I’m willing to admit
- You should message me if

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
