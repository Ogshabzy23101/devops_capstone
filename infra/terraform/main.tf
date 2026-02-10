provider "aws" {
  region = var.region
}
data "aws_vpc" "default" {
  default = true 
  
}

resource "aws_security_group" "devop_capstone_sg" {
  name        = "devop-capstone-sg"
  description = "Security group for Devon capstone project"
  vpc_id = data.aws_vpc.default.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
tags = {
  Name = "Devop-Capstone-SG"
}
}



resource "aws_instance" "devop_capstone_instance" {
  ami           = var.ami
  instance_type = var.instance_type
  key_name      = var.key_name
  security_groups = [aws_security_group.devop_capstone_sg.name]
  
  tags = {
    Name = "Devop-Capstone-Instance"
  }
}