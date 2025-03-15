from rest_framework import serializers
from .models import *

# Serializer for Student
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"

# Serializer for Deck
class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = "__all__"

# Serializer for StudyChatbox
class StudyChatboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudyChatbox
        fields = "__all__"

# Serializer for Flashcard
class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = "__all__"

# Serializer for Friendship
class FriendshipSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friendship
        fields = "__all__"

# Serializer for FriendshipHistory
class FriendshipHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendshipHistory
        fields = "__all__"

# Serializer for Group
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"

# Serializer for Event
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"

# Serializer for Discussion
class DiscussionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discussion
        fields = "__all__"


