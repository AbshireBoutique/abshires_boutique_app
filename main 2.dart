import 'package:flutter/material.dart';
import 'screens/home_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Abshire's Boutique",
      theme: ThemeData(
        primarySwatch: Colors.pink,
        fontFamily: 'Arial',
      ),
      home: HomePage(),
    );
  }
}