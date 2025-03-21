from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import *
from .serializer import *
# Create your views here.

class Index(APIView):

    def get(self,request):
        return Response({"message": "Hello from Django!"})
# Create your views here.
class GetDiscussion(APIView):
    def get(self, request):
        discussions = Discussion.objects.all()
        discussion_serializer = DiscussionSerializer(discussions, many=True)
        return Response(discussion_serializer.data)
    
class CreateDiscussion(APIView):
    def post(self, request):
        # Check for required fields based on the Discussion model
        required_fields = ['author', 'group', 'message']
        missing_fields = [field for field in required_fields if field not in request.data]
        
        if missing_fields:
            return Response(
                {"error": f"Missing required fields: {', '.join(missing_fields)}"},
                status=status.HTTP_400_BAD_REQUEST
            )
            
        discussion_serializer = DiscussionSerializer(data=request.data)
        if discussion_serializer.is_valid():
            discussion = discussion_serializer.save()
            return Response(discussion_serializer.data, status=status.HTTP_201_CREATED) 
        return Response(discussion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UpdateDiscussion(APIView):
    def put(self, request, pk):
        try:
            discussion = Discussion.objects.get(pk=pk)
            discussion_serializer = DiscussionSerializer(discussion, data=request.data)
            if discussion_serializer.is_valid():
                discussion_serializer.save()
                return Response(discussion_serializer.data)
            return Response(discussion_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Discussion.DoesNotExist:
            return Response({"error": "Discussion not found"}, status=status.HTTP_404_NOT_FOUND)
    
class DeleteDiscussion(APIView):
    def delete(self, request, pk):
        try:
            discussion = Discussion.objects.get(pk=pk)
            discussion.delete()
            return Response({"message": "Discussion deleted successfully"}, status=status.HTTP_200_OK)
        except Discussion.DoesNotExist:
            return Response({"error": "Discussion not found"}, status=status.HTTP_404_NOT_FOUND)      
