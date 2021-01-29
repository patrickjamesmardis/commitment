// quick cpp program to print 100 querySelectors a .txt file to copy into index.html

#include <fstream>
#include <iostream>
using namespace std;
int main()
{
    ofstream fout("cols.txt");
    for (int i = 1; i < 101; i++) {
        fout << "document.querySelectorAll(\".pixel" << i << "\"), ";
    }
    fout.close();
    return 0;
}