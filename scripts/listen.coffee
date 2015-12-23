enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
leaveReplies = ['Are you still there?', 'Target lost', 'Searching']


module.exports = (robot) ->


  robot.enter (res) ->
    res.send "hello!"
    res.send res.random enterReplies

  robot.leave (res) ->
    res.send  "bye"
    res.send res.random leaveReplies


    module.exports = (robot) ->
  robot.respond /annoy me/, (res) ->
    res.send "Hey, want to hear the most annoying sound in the world?"
    setInterval () ->
      res.send "AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH"
    , 1000

    module.exports = (robot) ->
  robot.respond /you are a little slow/, (res) ->
    setTimeout () ->
      res.send "Who you calling 'slow'?"
    , 60 * 1000


  robot.listen(
    (message) -> # Match function
      # Occassionally respond to things that Steve says
      message.user.name is "fmondoraz"
    (response) -> # Standard listener callback
      # Let Steve know how happy you are that he exists
      response.reply "HI Makkina! YOU'RE MY BEST FRIEND! (but only like #{response.match * 100}% of the time)"
  )
