package com.zsh.test;

public class StringTest {
	
	public static void main(String[] args) {
		String s1 = "b";
		String s2 = "a" + s1;
		String s3 = "ab";
		
		System.out.println(s2==s3);
		
		final String s4 = "b";
		String s5 = "a" + s4;
		System.out.println(s5 == s3);
	}
}
