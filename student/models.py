from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now
from enum import Enum



class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True, max_length=100)
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    

class Deck(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=500, blank=True)
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="decks")

    def _str_(self):
        return self.name

class StudyCategory(Enum):
    FOCUS_MODE = "FOCUS_MODE"
    STUDY_PLANS = "STUDY_PLANS"
    STUDY_TECHNIQUES = "STUDY_TECHNIQUES"
    GENERAL = "GENERAL"

class StudyChatbox(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="study_chatboxes")
    user_message = models.TextField(max_length=500)
    bot_response = models.TextField(max_length=500)
    category = models.CharField(max_length=50, choices=[(tag.value, tag.name) for tag in StudyCategory])
    timestamp = models.DateTimeField(default=now)

    def _str_(self):
        return f"Chat - {self.student.first_name}"

class Flashcard(models.Model):
    front_text = models.TextField(max_length=1000)
    back_text = models.TextField(max_length=1000)
    difficulty_level = models.CharField(max_length=50, blank=True, null=True)
    times_reviewed = models.PositiveIntegerField(default=0)
    last_reviewed_date = models.DateTimeField(blank=True, null=True)
    created_date = models.DateTimeField(default=now)
    category = models.CharField(max_length=50, blank=True, null=True)
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE, related_name="flashcards")

    def _str_(self):
        return f"Flashcard ({self.front_text[:30]}...)"

class Friendship(models.Model):
    sender = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="sent_friend_requests")
    receiver = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="received_friend_requests")
    status = models.CharField(max_length=20)
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Friendship: {self.sender.first_name} -> {self.receiver.first_name}"


class FriendshipHistory(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="friendship_history")
    action = models.CharField(max_length=50)
    timestamp = models.DateTimeField(default=now)

    def __str__(self):
        return f"{self.student.first_name} - {self.action}"
    
class Group(models.Model):
    name = models.CharField(max_length=50, unique=True)
    description = models.TextField(max_length=500, blank=True)
    created_at = models.DateTimeField(default=now)
    max_students = models.PositiveIntegerField()
    is_private = models.BooleanField(default=False)
    members = models.ManyToManyField(Student, related_name="groups")

    def _str_(self):
        return self.name
        
class Event(models.Model):
    event_title = models.CharField(max_length=255)
    event_description = models.TextField(blank=True, null=True)
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    recurring_rule = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    participants = models.ManyToManyField(Student, related_name="events")
    groups = models.ManyToManyField(Group, related_name="events")

    def __str__(self):
        return self.event_title

class Discussion(models.Model):
    author = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="discussions")
    group = models.ForeignKey(Group, on_delete=models.CASCADE, related_name="discussions")
    message = models.TextField()
    timestamp = models.DateTimeField(default=now)

    def _str_(self):
        return f"Discussion by {self.author.first_name}"