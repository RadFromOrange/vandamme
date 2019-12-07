extends KinematicBody2D

# Declare member variables here. Examples:
# var a = 2
# var b = "text"
const UP = Vector2(0,-1)
const GRAVITY = 21
const MAX_SPEED = 555 
const JUMP_HEIGHT = -555
const ACCELRATION = 66

var motion = Vector2()

func _ready():
	var palyer = AudioStreamPlayer.new();
	self.add_child(palyer)
	palyer.stream = load("res://Sonic_3_-_competition_menu_final.ogg")
	palyer.play()


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _physics_process(delta):
	
	
	
	print(Engine.get_frames_per_second()) 	
	
	motion.y += GRAVITY

	if Input.is_action_pressed("ui_right"):
		motion.x = min(motion.x+ACCELRATION, MAX_SPEED)
		$AnimatedSprite.flip_h = false
	elif Input.is_action_pressed("ui_left"):
		motion.x =  max(motion.x-ACCELRATION, -MAX_SPEED)
		$AnimatedSprite.flip_h = true
	else:
		motion.x = 0

	if(is_on_floor()):
		if Input.is_action_just_pressed("ui_up"):
			motion.y = JUMP_HEIGHT
	else:
		pass
		
	motion = move_and_slide(motion ,UP)
	  
#	pass
